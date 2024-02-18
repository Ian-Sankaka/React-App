// AlbumDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AlbumDetails = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        // Fetch album details using albumId
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
        const albumData = await response.json();
        setAlbum(albumData);
      } catch (error) {
        console.error('Error fetching album details:', error);
      }
    };

    // Call the function to fetch album details
    fetchAlbumDetails();
  }, [albumId]);

  return (
    <div>
      {album ? (
        <div>
          <h2>Album Details</h2>
          <p>Title: {album.title}</p>
          <p>User ID: {album.userId}</p>
          {/* Display more album details as needed */}
        </div>
      ) : (
        <p>Loading album details...</p>
      )}
    </div>
  );
};

export default AlbumDetails;
