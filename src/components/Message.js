import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);  
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""} bg-red-200 w-[30rem] ml-6 rounded-3xl mt-3 p-4`}>
      <div className="flex">
        <img
          className="chat-bubble__left w-14 -ml-3 -mt-3 rounded-full"
          src={message.avatar}
          alt="user avatar"
        />
        <p className="user-name ml-6 ">{message.name}</p>
      </div>
      <div className="chat-bubble__right bg-green-300 rounded-lg p-1 mt-1" >
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
