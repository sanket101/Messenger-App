import { memo } from "react";

const Sidebar = ({ friendsList, selectedFriend, handleFriendSelect }) =>{
    return <div className="sidebar">
    <h2>Friends</h2>
    <ul>
      {friendsList.map((friend) => (
        <li
          key={friend}
          className={friend === selectedFriend ? 'selected' : ''}
          onClick={() => handleFriendSelect(friend)}
        >
          {friend}
        </li>
      ))}
    </ul>
  </div>;
};

export default memo(Sidebar);