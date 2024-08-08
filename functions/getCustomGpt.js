// functions/getCustomGpt.js

const fetchWithRetry = async (url, options, retries = 5, backoff = 3000) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 429 && retries > 0) {
        console.warn(`Rate limited, retrying after ${backoff}ms...`);
        await new Promise(resolve => setTimeout(resolve, backoff * 2));
        return fetchWithRetry(url, options, retries - 1, backoff * 2);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const createThread = async (apiKey) => {
  const response = await fetch('https://api.openai.com/v1/threads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v1'
    },
    body: JSON.stringify({})
  });
  const data = await response.json();
  console.log('Create Thread Response:', data); // Add logging
  return data.id;  // Return the thread ID
};

const appendUserMessage = async (apiKey, threadId, message) => {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v1'
    },
    body: JSON.stringify({
      role: 'user',
      content: message
    })
  });
  const data = await response.json();
  console.log('Append User Message Response:', data); // Add logging
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
      'OpenAI-Beta': 'assistants=v1'
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  console.log('Create Run Response:', data); // Add logging
  return data;
};

const fetchMessages = async (apiKey, threadId) => {
  const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v1'
    }
  });
  const data = await response.json();
  console.log('Fetch Messages Response:', data); // Add logging

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
      'OpenAI-Beta': 'assistants=v1'
    }
  });
  const data = await response.json();
  console.log('Run Status Response:', data); // Add logging
  return data;
};

const waitForRunCompletion = async (apiKey, threadId, runId, interval = 3000, maxAttempts = 10) => {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const runStatus = await fetchRunStatus(apiKey, threadId, runId);
    if (runStatus.status === 'completed') {
      return runStatus;
    } else if (runStatus.status === 'failed') {
      throw new Error('Run failed');
    }
    console.log(`Run status: ${runStatus.status}, retrying in ${interval}ms...`);
    await new Promise(resolve => setTimeout(resolve, interval));
  }
  throw new Error('Run did not complete in time');
};

export const fetchGptData = async (prompt, assistantId, className) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log("API Key:", apiKey);

  try {
    // Step 1: Create a thread
    const threadId = await createThread(apiKey);

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
      const content = aiMessage.content;
      return content.map(item => item.text.value).join(" ");
    } else if (aiMessage && aiMessage.text) {
      return aiMessage.text.value;
    } else {
      throw new Error('Invalid message format from assistant');
    }
  } catch (error) {
    console.error('Error fetching GPT data:', error);
    return 'Error fetching response';
  }
};
