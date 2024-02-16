import React from 'react';
import './App.css';
import ExampleComponent from './components/ExampleComponent'; // Import ExampleComponent
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login'; // Import Login component

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} /> {/* Include Login component for the /login route */}
          <Route path="/" element={<ExampleComponent />} /> {/* Include ExampleComponent for the / route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


