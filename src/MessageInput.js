import React, { useState } from 'react';

function MessageInput(props) {
  const [message, setMessage] = useState('');

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSendMessage() {
    if (message.trim() !== '') {
      props.onSendMessage(message);
      setMessage('');
    }
  }

  return (
    <div className='d-flex'>
      <input 
        className='me-2 form-control shadow'
        placeholder='Enter your message'
        type="text" 
        value={message} 
        onChange={handleMessageChange} />
      <button className='btn btn-secondary shadow' onClick={handleSendMessage}>SEND</button>
    </div>
  );
}

export default MessageInput;
