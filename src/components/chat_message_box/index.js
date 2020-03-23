// contains the chat message component
// uses the mui treasury library for displaying the message array
import React from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import { AUTHORITY_CHAT_LOGO } from "./../../utility/constants.js";

const ChatMessage = props => (
  <div style={{ color: "#333" }}>
    <ChatMsg
      avatar={AUTHORITY_CHAT_LOGO}
      side={props.side}
      messages={props.messageArray}
    />
  </div>
);

export default ChatMessage;
