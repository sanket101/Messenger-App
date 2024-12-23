const ChatWindow = ({ currentMessage, selectedFriend, messages, setCurrentMessage, handleSendMessage }) => {
    return <div className="chat-window">
    <h2>Chat with {selectedFriend}</h2>
    <div className="messages">
      {(messages[selectedFriend] || []).map((msg, index) => (
        <div key={index} className={`message ${msg.sender === 'You' ? 'outgoing' : 'incoming'}`}>
          <span>{msg.sender}: </span>
          {msg.text}
        </div>
      ))}
    </div>

    <div className="input-area">
      <input
        type="text"
        placeholder="Type a message..."
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  </div>;
};

export default ChatWindow;