import React, { useState } from 'react';
import FriendForm from './FriendForm';
import Friend from './Friend';

function FriendList() {
  const [friends, setFriends] = useState([]);

  const addFriend = friend => {
    if (!friend.text || /^\s*$/.test(friend.text)) {
      return;
    }

    const newFriends = [friend, ...friends];

    setFriends(newFriends);
    console.log(...todos);
  };

  const updateTodo = (friendId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === friendId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...friends].filter(friend => friend.id !== id);

    setTodos(removedArr);
  };

  const completeFriend = id => {
    let updatedFriends = friends.map(friend => {
      if (friend.id === id) {
        friend.isComplete = !friend.isComplete;
      }
      return friend;
    });
    setTodos(updatedFriends);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <FriendForm onSubmit={addFriend} />
      <Friend
        friend={friends}
        completeFriend={completeFriend}
        removeFriend={removeFriend}
        updateFriend={updateFriend}
      />
    </>
  );
}

export default FriendList;