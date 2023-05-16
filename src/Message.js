import React from 'react';
import './App.css';


function Message(props) {
  return (
    <div className='d-flex bg-primary m-2 p-2 rounded shadow'>
      <div className='me-2'>
        <img className='img' src={props.icon} alt='' />
        <div className="text-center">{props.name}</div>
      </div>
      <div className='d-flex flex-column justify-content-end'>
        <div className="mb-2">{props.message}</div>
        <div className="">{props.date.toLocaleString()}</div>
      </div>
    </div>
  );
} 

export default Message;

