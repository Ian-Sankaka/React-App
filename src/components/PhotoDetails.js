// PhotoDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotoDetails = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
        const photoData = await response.json();
        setPhoto(photoData);
        setEditedTitle(photoData.title);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchPhoto();
  }, [photoId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform a PATCH or PUT request to update the photo title on the backend
    // Example: Implement a function to update the title in your API
    // updatePhotoTitle(photoId, editedTitle);

    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <div className="text-center">
      {photo ? (
        <div>
          <img src={photo.url} alt={photo.title} className="mx-auto mb-4 rounded-lg shadow-lg" />
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={handleTitleChange}
                className="border p-2 mr-2"
              />
              <button
                onClick={handleSaveClick}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-2">{editedTitle}</h2>
              <button
                onClick={handleEditClick}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Edit Title
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PhotoDetails;
