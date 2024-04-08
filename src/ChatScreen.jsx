import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      msg_id: 1,
      name: "Ellen",
      image: "...",
      message: "Whats up",
    },
    {
      msg_id: 2,
      name: "Helen",
      image: "...",
      message: "Yo",
    },
    {
      msg_id: 3,
      message: "Hows it goin",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.length != 0) {
      setMessages([...messages, { message: input }]);
      setInput("");
    } else {
      console.log("EMPTY");
    }
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with Ellen</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message" key={message.msg_id}>
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key={message.msg_id}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form action="" className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            type="text"
            className="chatScreen__inputField"
          />
          <button onClick={handleSend} className="chatScreen__inputButton">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
