import React from 'react';
import './App.css';


function Message({icon, name, message, date}) {
  return (
    <div className='d-flex bg-primary m-2 p-2 rounded shadow'>
      <div className='me-2'>
        <img className='img' src={icon} alt='' />
        <div className="text-center">{name}</div>
      </div>
      <div className='d-flex flex-column justify-content-end'>
        <div className="mb-2">{message}</div>
        <div className="">{date.toLocaleString()}</div>
      </div>
    </div>
  );
} 

export default Message;

