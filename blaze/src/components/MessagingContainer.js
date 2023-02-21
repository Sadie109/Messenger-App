import {
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from "stream-chat-react";
import React from "react";

const MessagingContainer = () => {
  return (
    (
      <>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </>
    )
  );
};

export default MessagingContainer;
