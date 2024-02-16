// Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';

// ... rest of the code



const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      // You can handle successful login here, for example, redirect to another page
      console.log('Login successful', userCredential.user);
      history.push('/dashboard'); // Redirect to dashboard page
    } catch (error) {
      console.error('Login error', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;


