// UserProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch user information based on userId
    const fetchUser = async () => {
      // Assuming 'users' is your Firestore collection
      const userRef = db.collection('users').doc(userId);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        setUser(userDoc.data());
      } else {
        console.error('User not found');
      }
    };

    // Fetch albums for the user
    const fetchAlbums = async () => {
      // Assuming 'albums' is your Firestore collection
      const albumsRef = db.collection('albums').where('userId', '==', userId);
      const albumsSnapshot = await albumsRef.get();
      const albumsData = albumsSnapshot.docs.map((doc) => doc.data());
      setAlbums(albumsData);
    };

    fetchUser();
    fetchAlbums();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h3>User Albums</h3>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            Album ID: {album.id}, Title: {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
