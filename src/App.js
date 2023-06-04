import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MessageInput from './MessageInput';
import ProfileDropdown from './ProfileDropdown';
import MessageList from './MessageList';

function App() {

  const profiles = [
    { id: 1, name: 'Tom', icon: '/img/tom.jpg' },
    { id: 2, name: 'Jerry', icon: '/img/jerry.png' }, 
    { id: 3, name: 'Alisa', icon: '/img/alisa.png' },
    { id: 4, name: 'Bob', icon: '/img/bob.jpg' },
    { id: 5, name: 'Samanta', icon: '/img/samanta.jpg' },
    { id: 6, name: 'Dona', icon: '/img/dona.jpg' },
  ];
  
  const [selectedProfile, setSelectedProfile] = useState(profiles[0].id);
  const [messages, setMessages] = useState([]);

  function handleSendMessage(message) {
    const selectedProfileData = profiles.find(profile => profile.id === selectedProfile);
    if (selectedProfileData) {
      const newMessage = {
        id: messages.length + 1,
        profileId: selectedProfile,
        icon: selectedProfileData.icon,
        name: selectedProfileData.name,
        message: message,
        date: new Date(),
      };
      setMessages([...messages, newMessage]);
    }
  }

  function handleProfileChange(event) {
    setSelectedProfile(parseInt(event.target.value));
  }

  return (
    <div className="chat p-5 bg-success">
      <MessageList messages={messages} />
      <div className='chat__wrapper d-flex m-2'>
        <ProfileDropdown
          profiles={profiles}
          selectedProfile={selectedProfile}
          onProfileChange={handleProfileChange}
        />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
      
    </div>
  );
}

export default App;

