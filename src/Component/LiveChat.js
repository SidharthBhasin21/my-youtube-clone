import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessages } from "../utils/chatSlice";
import { randomName, randomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveChatText, setLiveChatText] = useState("");
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
      <form
        className="py-2 my-5 w-full border"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Sidharth",
              message: liveChatText,
            })
          );
          setLiveChatText("");
        }}
      >
        <input
          className="w-3/4"
          type="text"
          value={liveChatText}
          onChange={(e) => {
            setLiveChatText(e.target.value);
          }}
        />
        <button className="px-5 mx-2 border bg-slate-200 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
