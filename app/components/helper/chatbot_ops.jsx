"use client";
import React, { useState } from "react";
import { FaComments } from "react-icons/fa6";
import "../../css/bot.css";

import config from "../../components/chatbot/config";
import MessageParser from "../../components/chatbot/MessageParser";
import ActionProvider from "../../components/chatbot/ActionProvider";
import Chatbot from "react-chatbot-kit";

const ChatBotPopUp = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-end z-20">
      {isChatOpen && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="What do you want to know?"
        />
      )}

      <button
        onClick={toggleChat}
        className="fixed bottom-8 left-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out"
        aria-label="Speed dial button"
      >
        <FaComments/>
      </button>
    </div>
  )
}

export default ChatBotPopUp;