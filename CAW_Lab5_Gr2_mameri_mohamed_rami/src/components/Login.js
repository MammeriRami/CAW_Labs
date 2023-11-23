import React, { useState } from 'react';

const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const AuthenticationForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(`${username} - ${password}`);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const AuthApp = () => {
  const [userList, setUserList] = useState([]);

  const handleLogin = (user) => {
    setUserList((prevUsers) => [...prevUsers, user]);
  };

  const handleDelete = (index) => {
    setUserList((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>User Authentication App</h1>
      <AuthenticationForm onLogin={handleLogin} />
      <UserList users={userList} onDelete={handleDelete} />
    </div>
  );
};

export default AuthApp;