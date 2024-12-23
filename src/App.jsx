import React, { useCallback, useState } from 'react';
import './App.css'; 
import ChatWindow from './components/ChatWindow/ChatWindow';
import Sidebar from './components/SideBar/sidebar';

const friendsList = ['Alice', 'Bob', 'Charlie'];

const App = () => {
  const [selectedFriend, setSelectedFriend] = useState(friendsList[0]);
  const [messages, setMessages] = useState({});
  const [currentMessage, setCurrentMessage] = useState('');

  const handleFriendSelect = useCallback((friend) => {
    setSelectedFriend(friend);
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!currentMessage.trim()) return;

    setMessages((prevMessages) => {
      const friendMessages = prevMessages[selectedFriend] || [];
      return {
        ...prevMessages,
        [selectedFriend]: [...friendMessages, { sender: 'You', text: currentMessage }],
      };
    });

    setCurrentMessage('');
  }, [currentMessage]);

  return (
    <div className="app">
      <Sidebar friendsList={friendsList} selectedFriend={selectedFriend} handleFriendSelect={handleFriendSelect} />

      <ChatWindow currentMessage={currentMessage} selectedFriend={selectedFriend} messages={messages} setCurrentMessage={setCurrentMessage} handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;