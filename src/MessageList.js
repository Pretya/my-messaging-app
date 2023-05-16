import React from 'react';
import Message from './Message'

function MessageList(props) {
  return (
    <div>
      {props.messages.map(message => (
        <Message
          key={message.id}
          icon={message.icon}
          name={message.name}
          {...message}
        />
      ))}
    </div>
  );
}

export default MessageList;
