import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessages } from "../utils/chatSlice";
import { randomName, randomMessage } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: randomName(),
          message: randomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border rounded-lg bg-slate-100">
      <div className="font-bold m-2 ">Live chat</div>
      <div className="w-full h-[540px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message, index) => {
          return <ChatMessage name={message.name} message={message.message} />;
        })}
      </div>
    </div>
  );
};

export default LiveChat;
