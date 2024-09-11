import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classData from '../classes.json';
import { fetchGptData } from '../../functions/getCustomGpt';
import { getAssistantInfo } from '../../functions/getAssistantId';
import Spinner from './Spinner';
import FAQDropdown from './FAQDropdown'; // Import the updated FAQDropdown component
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
    <div className="flex flex-col min-h-screen font-sans text-black">
      <div className="container mx-auto p-4 flex flex-1">
        {isSidebarOpen && (
          <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
            {/* Header: Trajan Pro Regular, all caps */}
            <h2 className="text-2xl font-serif uppercase text-[#002D72] mb-4">Class Information</h2>
            
            {/* Subheadings and Body Text: Source Sans Pro Regular and Light */}
            <p className="text-base font-bold text-gray-800">Professor:</p>
            <p className="text-base font-light text-black mb-4">{classItem.Professor}</p>

            <p className="text-base font-bold text-gray-800">Department:</p>
            <p className="text-base font-light text-black mb-4">{classItem.Department}</p>

            <p className="text-base font-bold text-gray-800">Location:</p>
            <p className="text-base font-light text-black mb-4">{classItem.Location}</p>

            <p className="text-base font-bold text-gray-800 mt-4">Description:</p>
            <p className="text-sm font-light text-black leading-[1.4rem]">{classItem.Description}</p>

            {/* Quick FAQ Section */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-black mb-4">Frequently Asked Questions</h3>
              <FAQDropdown 
                question="How do I start a new chat with the class assistant?" 
                answer="To start a new chat, simply click the 'New Chat' button located at the top of the chat window." 
              />
              <FAQDropdown 
                question="Can I access previous chat conversations?" 
                answer="Currently, the application does not save chat histories. Consider copying important responses before starting a new chat." 
              />
              <FAQDropdown 
                question="How do I activate an AI-enabled assignment in this class?" 
                answer="To activate an AI-enabled assignment, your instructor will load a pre-packaged prompt or exercise into the assistant's knowledge base. Simply ask the assistant to help you with the assignment, and the AI will respond with the appropriate content based on the materials your instructor has provided. For specific instructions, refer to the assignment document uploaded by your instructor." 
              />
              <FAQDropdown 
                question="Can I attach or download a file from this Assistant?" 
                answer="No, at this point, that functionality is not available in 'pilot' mode. You should cut and paste both input and output to and from your personal files." 
              />
            </div>
          </div>
        )}
        {/* Main chat and sidebar */}
        <div className={`flex-1 p-4 flex flex-col ${isSidebarOpen ? 'w-3/4' : 'w-full'}`}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-serif uppercase text-[#002D72]">{classItem['Class Name']} Assistant</h1>
            <div>
              <button
                onClick={startNewChat}
                className="new-chat-button bg-[#002D72] text-white px-4 py-2 rounded-lg mr-2 transition-colors duration-300 font-bold hover:bg-[#FFDD00]"
                aria-label="Start a new chat"
              >
                New Chat
              </button>
              <button
                onClick={toggleSidebar}
                className="sidebar-toggle-button bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-bold hover:bg-[#FFDD00]"
                aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              >
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              </button>
            </div>
          </div>
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto border border-gray-300 p-4 bg-white text-black mb-4 shadow-md rounded-lg">
            {chatMessages.map((message, index) => (
              <div key={index} className={`p-2 my-2 ${message.sender === 'gpt' ? 'text-left' : 'text-right'} text-sm font-light leading-[1.4rem]`}>
                <div dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            ))}
            {loading && <Spinner />}
          </div>
          {error && <div className="text-red-600">{error}</div>}
          {/* Input section */}
          <div className="flex items-center border-t border-gray-300 pt-4">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="flex-1 p-2 border border-gray-300 rounded-lg mr-4 focus:outline-none focus:border-[#002D72] font-light"
            />
            <button
              onClick={handleSend}
              className="send-button bg-[#002D72] text-white px-4 py-2 rounded-lg transition-colors duration-300 font-bold hover:bg-[#FFDD00]"
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
