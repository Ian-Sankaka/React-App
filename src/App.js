// App.js
import React from 'react';
import './App.css';
import LandingPage from './components/Landing';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import AlbumDetails from './components/AlbumDetails';
import PhotoDetails from './components/PhotoDetails';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4 flex justify-center"> {/* Updated styling here */}
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/landing" className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600">Landing</Link>
            </li>
            <li>
              <Link to="/" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Home</Link>
            </li>
            <li>
              <Link to="/login" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Login</Link>
            </li>
            <li>
              <Link to="/users" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">Users</Link>
            </li>
            <li>
              <Link to="/albums/1" className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Album</Link>
            </li>
            <li>
              <Link to="/photo/1" className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600">Photo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="/albums/:albumId" element={<AlbumDetails />} />
          <Route path="/photo/:photoId" element={<PhotoDetails />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

