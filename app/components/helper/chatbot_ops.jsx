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
      <div >
        <iframe src="https://503336a47631438da66419c0ff966ddc.elf.site/" width="350" height="500" style={{ border: "none", overflow: "hidden" }} className scrolling="no" frameBorder="0"></iframe>
      </div>

      {/* {isChatOpen && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          placeholderText="What do you want to know?"
        />
      )} */}

      {/* <button
        onClick={toggleChat}
        className="fixed bottom-8 left-30 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4"
        aria-label="Speed dial button"
      >
        <FaComments/>
      </button> */}
    </div>
  )
}

export default ChatBotPopUp;