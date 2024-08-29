import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classData from '../classes.json';
import { fetchGptData } from '../../functions/getCustomGpt';
import { getAssistantInfo } from '../../functions/getAssistantId';
import Spinner from './Spinner';
import { marked } from 'marked';

const ClassDetail = () => {
  const { classId } = useParams();
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const classItem = classData.classes.find((item) => item.id === parseInt(classId));
  const [assistantInfo, setAssistantInfo] = useState({ assistantId: null, vectorStorageId: null });

  useEffect(() => {
    if (classItem) {
      const info = getAssistantInfo(classItem["Class Code"]);
      setAssistantInfo(info);
    }
  }, [classItem]);

  const handleSend = async () => {
    if (chatInput.trim() === '' || !assistantInfo.assistantId) return;

    const userMessage = { sender: 'user', text: chatInput, timestamp: new Date() };
    setChatMessages((prevMessages) => [...prevMessages, userMessage]);
    setChatInput('');
    setLoading(true);

    try {
      const gptResponseText = await fetchGptData(chatInput, classItem["Class Code"]);
      const gptResponseHtml = marked(gptResponseText);

      const gptMessage = { sender: 'gpt', text: gptResponseHtml, timestamp: new Date() };
      setChatMessages((prevMessages) => [...prevMessages, gptMessage]);
    } catch (error) {
      setError(error.message || 'Failed to send message');
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const startNewChat = () => {
    setChatMessages([]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  if (!classItem) {
    return <p>Class not found</p>;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <div className="container mx-auto p-4 flex flex-1">
        {isSidebarOpen && (
          <div className="w-1/4 bg-gray-200 p-4 border-r border-gray-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Class Information</h2>
            {/* Placeholder content for sidebar */}
            <p className="text-base text-gray-700">Professor: {classItem.Professor}</p>
            <p className="text-base text-gray-700">Department: {classItem.Department}</p>
            <p className="text-base text-gray-700">Location: {classItem.Location}</p>
            <p className="text-base text-gray-700 mt-4">Description:</p>
            <p className="text-sm text-gray-600">{classItem.Description}</p>
          </div>
        )}
        <div className={`flex-1 p-4 flex flex-col ${isSidebarOpen ? 'w-3/4' : 'w-full'}`}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-serif text-blue-900">{classItem['Class Name']} Assistant</h1>
            <div>
              <button
                onClick={startNewChat}
                className="new-chat-button bg-blue-900 text-white px-4 py-2 rounded-lg mr-2 transition-colors duration-300 hover:bg-[#f2ae00]"
                aria-label="Start a new chat"
              >
                New Chat
              </button>
              <button
                onClick={toggleSidebar}
                className="sidebar-toggle-button bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#f2ae00]"
                aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              >
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto border border-gray-300 p-4 bg-blue-900 text-white mb-4 shadow-md rounded-lg">
            {chatMessages.map((message, index) => (
              <div key={index} className={`p-2 my-2 ${message.sender === 'gpt' ? 'text-left' : 'text-right'} text-base`}>
                <div dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            ))}
            {loading && <Spinner />}
          </div>
          {error && <div className="text-red-600">{error}</div>}
          <div className="flex items-center border-t border-gray-300 pt-4">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="flex-1 p-2 border border-gray-300 rounded-lg mr-4 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSend}
              className="send-button bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#f2ae00]"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
