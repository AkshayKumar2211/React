import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h1>Username is {user.username}</h1>
      ) : (
        <h1>Not Found User</h1>
      )}
    </div>
  );
};

export default Profile;