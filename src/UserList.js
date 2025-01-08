import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div align="center">
    <h1>Users List</h1>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </div>
  );
}

export default UserList;
