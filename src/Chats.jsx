import Chat from "./Chat";
import React from "react";

function Chats() {
  return (
    <div className="chats">
      <Chat name="Ellen" message="Hi" timestamp="35 minutes ago" profilePic="" />
      <Chat name="Mark" message="Hi" timestamp="35 minutes ago" profilePic="" />
    </div>
  );
}

export default Chats;
