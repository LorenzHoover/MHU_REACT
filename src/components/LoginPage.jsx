import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import head from '../assets/images/head.svg'; // Adjust the path based on your project structure

const LoginPage = () => {
  const { loginWithRedirect, handleRedirectCallback, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleAuth = async () => {
      if (window.location.search.includes('code=')) {
        try {
          await handleRedirectCallback();
          // Optionally redirect to the home page or another page
          window.location.replace('/home'); // Adjust the redirect as needed
        } catch (error) {
          console.error('Error handling redirect callback:', error);
          setError('Authentication failed. Please try again.');
        }
      }
    };
    handleAuth();
  }, []);

  const handleLogin = () => {
    const emailDomain = email.split('@')[1];
    if (emailDomain !== 'mhu.edu') {
      setError('Please use a valid mhu.edu email address.');
      return;
    }

    loginWithRedirect({
      connection: 'email', // Ensure it's using the passwordless email connection
      email,
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  if (isAuthenticated) {
    // Redirect if already authenticated
    window.location.replace('/home'); // Adjust the redirect as needed
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#002D72' }}>
      <img src={head} alt="Head Icon" className="mb-8 w-32 h-32" /> {/* Adjust size as needed */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your MHU email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress} // Add keypress listener
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-lg transition-colors duration-300"
          style={{
            backgroundColor: '#000000', // Black
            color: '#FFFFFF', // White text color for contrast
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F2AE00'} // Mars Hill Yellow on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#000000'}  // Revert to Black on mouse out
        >
          Log In
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
