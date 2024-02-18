// UserList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [albumsCount, setAlbumsCount] = useState(0);

  useEffect(() => {
    // Fetch users
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Fetch albums
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albumsData = await response.json();
        setAlbumsCount(albumsData.length);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    // Call the functions to fetch data
    fetchUsers();
    fetchAlbums();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <h2>User List</h2>
      <p>Total albums: {albumsCount}</p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>Email: {user.email}</p>
            <p>Albums: {user.albums ? user.albums.length : 0}</p>
            {/* Display more user details as needed */}
            <Link to={`/user/${user.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

