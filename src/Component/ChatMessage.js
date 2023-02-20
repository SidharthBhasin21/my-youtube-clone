import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center ">
      <img
        className="w-10 h-10 "
        alt="user"
        src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
      />
      <span className="font-bold mr-1">{name}: </span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
