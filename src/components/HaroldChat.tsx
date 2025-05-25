import React, { useState } from 'react';
import { SendIcon, XIcon, MinimizeIcon, MaximizeIcon } from 'lucide-react';
interface HaroldChatProps {
  darkMode: boolean;
}
const HaroldChat = ({
  darkMode
}: HaroldChatProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{
    sender: 'harold',
    text: "Hi there! I'm Harold, your AI career coach. How can I help with your resume today?"
  }]);
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    // Add user message to chat
    setChatHistory([...chatHistory, {
      sender: 'user',
      text: message
    }]);
    // Simulate Harold's response
    setTimeout(() => {
      let response = '';
      if (message.toLowerCase().includes('score')) {
        response = 'Your resume score is based on keyword matching with the job description, relevant experience, and formatting quality. I noticed your resume could use more industry-specific keywords related to this position.';
      } else if (message.toLowerCase().includes('improve')) {
        response = 'To improve your resume for this role, try highlighting your project management experience more prominently and quantify your achievements with specific metrics. Also, consider adding some of these keywords: agile methodology, cross-functional teams, and stakeholder management.';
      } else if (message.toLowerCase().includes('skill')) {
        response = "Based on this job posting, you might want to emphasize these skills: data analysis, SQL proficiency, and experience with visualization tools like Tableau or Power BI. Your current resume mentions SQL but doesn't highlight your proficiency level.";
      } else {
        response = "I'd be happy to help with that! Is there anything specific about your resume you'd like me to focus on for this job application?";
      }
      setChatHistory(prev => [...prev, {
        sender: 'harold',
        text: response
      }]);
    }, 1000);
    setMessage('');
  };
  if (!isOpen) {
    return <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors" aria-label="Chat with Harold">
        <div size={24} />
      </button>;
  }
  return <div className={`fixed bottom-6 right-6 w-80 md:w-96 ${isMinimized ? 'h-14' : 'h-96'} rounded-lg shadow-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Chat header */}
      <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center">
          <div size={20} className="mr-2" />
          <span className="font-medium">Harold - AI Resume Coach</span>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:bg-indigo-700 p-1 rounded" aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}>
            {isMinimized ? <MaximizeIcon size={16} /> : <MinimizeIcon size={16} />}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-700 p-1 rounded" aria-label="Close chat">
            <XIcon size={16} />
          </button>
        </div>
      </div>
      {!isMinimized && <>
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatHistory.map((chat, index) => <div key={index} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3/4 rounded-lg p-3 ${chat.sender === 'user' ? 'bg-indigo-100 dark:bg-indigo-900 text-gray-800 dark:text-gray-100' : darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {chat.text}
                </div>
              </div>)}
          </div>
          {/* Chat input */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Ask Harold about your resume..." className={`flex-1 p-2 rounded-l-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} />
              <button onClick={handleSendMessage} className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700" aria-label="Send message">
                <SendIcon size={20} />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Harold can help optimize your resume for this specific job
            </div>
          </div>
        </>}
    </div>;
};
export default HaroldChat;