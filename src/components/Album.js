// Albums.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch albums data
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albumsData = await response.json();
        setAlbums(albumsData);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    // Call the function to fetch albums
    fetchAlbums();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Albums</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <Link to={`/album/${album.id}`} className="block mb-4">
              <img
                src="https://via.placeholder.com/400x200"  // Replace with the actual album cover image
                alt={album.title}
                className="w-full h-40 object-cover rounded-md"
              />
            </Link>
            <Link to={`/album/${album.id}`} className="block text-blue-500 hover:underline">
              <p className="text-lg font-semibold mb-2">{album.title}</p>
            </Link>
            <p className="text-gray-500">{`Photos: ${album.photos.length}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
