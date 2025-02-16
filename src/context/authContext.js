import React, { createContext, useState } from 'react';
import axios from 'axios';


// Create the AuthContext
const AuthContext = createContext();

// Provide the AuthContext to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authentificate, setAuthentificate] = useState(false);

  // Function to handle signup
  const signup = async ({ firstName, lastName, email, password, club, post }) => {
    try {
      setLoading(true);
  
      // Validate required fields
      if (!firstName || !lastName || !email || !password) {
        throw new Error('Please fill in all required fields');
      }
  
      const response = await axios.post(
        'http://localhost:8000/v1/users/signup',
        { firstName, lastName, email, password, club, post },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000, // 10 seconds timeout
          validateStatus: (status) => status < 500 // Accept 4xx errors for better handling
        }
      );
  
      console.log('Raw Response:', response);
  
      // Check for a successful status
      if (response.status >= 200 && response.status < 300) {
        const { client, token: newToken } = response.data;
  
        if (newToken) {
          localStorage.setItem('authToken', newToken);
          setToken(newToken);
        }
  
        if (client) {
          setUser(client);
          setAuthentificate(true);
        } else {
          throw new Error('Signup succeeded, but client data is missing');
        }
      } else {
        throw new Error(response.data?.message || `Signup failed with status ${response.status}`);
      }
  
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Signup failed';
      console.error('Signup Error:', errorMessage, error);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  
  
  // Function to handle login
 /* const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/users/login', { email, password });

      const { token: newToken, client } = response.data;
      localStorage.setItem('authToken', newToken);
      setToken(newToken);
      setAuthentificate(true);
      setUser(client);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAuthentificate(false);
      setError(error.response?.data?.message || 'Invalid email or password');
    }
  };

  // Function to handle logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };
*/
  return (
    <AuthContext.Provider value={{ user, authentificate, token, loading, error, signup/*, login, logout*/ }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};