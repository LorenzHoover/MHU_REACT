import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classData from '../classes.json';
import Navbar from './Navbar';

const ClassDetail = () => {
  const { classId } = useParams();
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const classItem = classData.classes.find((item) => item.id === parseInt(classId));

  const fetchGptData = async (prompt) => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: classItem.CustomGptId,
          prompt,
          max_tokens: 150
        })
      });
      const data = await response.json();
      console.log('Chat GPT Response:', data);  // Log the chat response
      return data.choices[0].text;
    } catch (error) {
      console.error('Error fetching GPT data:', error);
      return 'Error fetching response';
    }
  };

  const handleSend = async () => {
    if (chatInput.trim() === '') return;

    const userMessage = { sender: 'user', text: chatInput };
    setChatMessages([...chatMessages, userMessage]);
    setChatInput('');

    const gptResponseText = await fetchGptData(chatInput);
    const gptMessage = { sender: 'gpt', text: gptResponseText };
    setChatMessages([...chatMessages, userMessage, gptMessage]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!classItem) {
    return <p>Class not found</p>;
  }

  const weeks = [
    { week: 1, assignments: ['Assignment 1.1', 'Assignment 1.2'] },
    { week: 2, assignments: ['Assignment 2.1', 'Assignment 2.2'] },
    { week: 3, assignments: ['Assignment 3.1', 'Assignment 3.2'] },
    { week: 4, assignments: ['Assignment 4.1', 'Assignment 4.2'] },
    // Add more weeks as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 flex flex-1">
        <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-200">
          <h2 className="text-xl font-bold mb-4">Semester Breakdown</h2>
          {weeks.map((week) => (
            <div key={week.week} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Week {week.week}</h3>
              <ul>
                {week.assignments.map((assignment, index) => (
                  <li key={index} className="pl-4">{assignment}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-1/2 p-4 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">{classItem['Class Name']} Assistant</h1>
          <div className="flex-1 overflow-y-auto border border-gray-200 p-4 bg-gray-50 mb-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`p-2 my-2 ${message.sender === 'gpt' ? 'text-left' : 'text-right'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex items-center border-t border-gray-200 pt-4">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="flex-1 p-2 border border-gray-300 rounded-lg mr-4"
            />
            <button onClick={handleSend} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
        <div className="w-1/4 bg-gray-100 p-4 border-l border-gray-200">
          <h2 className="text-xl font-bold mb-4">Feedback</h2>
          <div>Here you can provide feedback or see additional options related to the class.</div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
