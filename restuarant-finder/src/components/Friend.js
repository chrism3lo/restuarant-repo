import React, { useState } from 'react';
import FriendForm from './FriendForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Friend = ({ friends, removeFriend, updateFriend }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateFriend(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <FriendForm edit={edit} onSubmit={submitUpdate} />;
  }

  return friends.map((friend, index) => (
    <div
      className={friend.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeFriend(friend.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: friend.id, value: friend.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Friend;