// functions/getCustomGpt.js
import { getAssistantInfo } from './getAssistantId';

export const fetchGptData = async (prompt, classCode) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log("API Key:", apiKey);

  const assistantInfo = getAssistantInfo(classCode);
  if (!assistantInfo) {
    throw new Error('Assistant not found for the given class code');
  }

  const { assistantId, vectorStorageId } = assistantInfo;

  try {
    // Step 1: Create a thread with the vector storage ID
    const threadId = await createThread(apiKey, vectorStorageId);

    if (!threadId) {
      throw new Error('Failed to create thread');
    }

    // Step 2: Append user message to the thread
    await appendUserMessage(apiKey, threadId, prompt);

    // Step 3: Create a run with the assistant ID
    const runResponse = await createRun(apiKey, threadId, assistantId);
    if (runResponse.error) {
      throw new Error(runResponse.error.message);
    }

    const runId = runResponse.id;

    // Step 4: Wait for the run to complete
    const completedRun = await waitForRunCompletion(apiKey, threadId, runId);
    console.log('Completed Run Response:', completedRun); // Add logging

    // Step 5: Fetch messages from the thread
    const messages = await fetchMessages(apiKey, threadId);
    console.log('Messages:', messages); // Add logging

    if (!messages || messages.length === 0) {
      throw new Error('No messages found in the thread');
    }

    const aiMessage = messages.find(msg => msg.role === 'assistant');
    console.log('AI Message:', aiMessage); // Add logging

    if (aiMessage && typeof aiMessage.content === 'object') {
      const content = aiMessage.content.map(item => item.text.value).join(" ");
      return sanitizeResponse(content);
    } else if (aiMessage && aiMessage.text) {
      return sanitizeResponse(aiMessage.text.value);
    } else {
      throw new Error('Invalid message format from assistant');
    }
  } catch (error) {
    console.error('Error fetching GPT data:', error);
    return 'Error fetching response';
  }
};

// Helper function to sanitize the response
const sanitizeResponse = (text) => {
  // Remove any citation references like " "
  return text.replace(/【\d+:\d+†source】/g, '');
};

const createThread = async (apiKey, vectorStorageId) => {
  const payload = {
    tool_resources: {}
  };

  // Add vector store ID only if it's available
  if (vectorStorageId) {
    payload.tool_resources.file_search = {
      vector_store_ids: [vectorStorageId]
    };
  }

  const response = await fetch('https://api.openai.com/v1/threads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v2'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  console.log('Create Thread Response:', data); // Add logging

  if (data.error) {
    console.error('Error creating thread:', data.error.message);
    return null;
  }

  return data.id;  // Return the thread ID
};

const appendUserMessage = async (apiKey, threadId, message) => {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v2'
    },
    body: JSON.stringify({
      role: 'user',
      content: message
    })
  });
  const data = await response.json();
  console.log('Append User Message Response:', data); // Add logging

  if (data.error) {
    console.error('Error appending message:', data.error.message);
    return null;
  }

  return data;
};

const createRun = async (apiKey, threadId, assistantId) => {
  const payload = {
    assistant_id: assistantId
  };

  console.log('Creating run with payload:', payload);

  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v2'
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  console.log('Create Run Response:', data); // Add logging

  if (data.error) {
    console.error('Error creating run:', data.error.message);
    return null;
  }

  return data;
};

const fetchMessages = async (apiKey, threadId) => {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v2'
    }
  });
  const data = await response.json();
  console.log('Fetch Messages Response:', data); // Add logging

  if (data.error) {
    console.error('Error fetching messages:', data.error.message);
    return [];
  }

  if (!data || !data.data) {
    throw new Error('Invalid response structure');
  }

  return data.data;
};

const fetchRunStatus = async (apiKey, threadId, runId) => {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v2'
    }
  });
  const data = await response.json();
  console.log('Run Status Response:', data); // Add logging

  if (data.error) {
    console.error('Error fetching run status:', data.error.message);
    return null;
  }

  return data;
};

const waitForRunCompletion = async (apiKey, threadId, runId, interval = 3000, maxAttempts = 10) => {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const runStatus = await fetchRunStatus(apiKey, threadId, runId);
    if (runStatus && runStatus.status === 'completed') {
      return runStatus;
    } else if (runStatus && runStatus.status === 'failed') {
      throw new Error('Run failed');
    }
    console.log(`Run status: ${runStatus ? runStatus.status : 'unknown'}, retrying in ${interval}ms...`);
    await new Promise(resolve => setTimeout(resolve, interval));
  }
  throw new Error('Run did not complete in time');
};
