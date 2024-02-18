// Login.js
import React, { useState } from 'react';
import { auth, collection, addDoc } from '../firebase'; 
import 'firebase/auth';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuthAction = async () => {
    try {
      if (isRegistering) {
        // Register new user
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);

        // Store additional user data in Firestore
        const usersCollection = collection(db, 'users'); // Assuming 'users' is your Firestore collection
        await addDoc(usersCollection, { email: userCredential.user.email });

        console.log('Registration successful');
      } else {
        // Log in existing user
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('Login successful', userCredential.user);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isRegistering ? 'Register' : 'Login'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Form inputs */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Action button */}
          <div>
            <button
              type="button"
              onClick={handleAuthAction}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </div>

          {/* Toggle between Login and Register */}
          <div className="flex items-center justify-center">
            <p
              onClick={() => setIsRegistering(!isRegistering)}
              className="cursor-pointer text-sm text-gray-600 hover:text-gray-800"
            >
              {isRegistering ? 'Already have an account? Login here.' : "Don't have an account? Register here."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
