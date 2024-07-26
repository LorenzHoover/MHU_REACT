// src/functions/getCustomGpt.js
export const fetchGptData = async (prompt, classItem) => {
    console.log("API Key:", import.meta.env.VITE_OPENAI_API_KEY);
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({
          model: "gpt-4o", // Fixed model as per your terminal command
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 50, // Limit the token response to 50 tokens
          temperature: 0.7
        })
      });
      const data = await response.json();
      console.log('Chat GPT Response:', data);
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching GPT data:', error);
      return 'Error fetching response';
    }
  };
  