import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      setMessage('Password reset email sent. Please check your inbox.');
      setError('');
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email');
          break;
        default:
          setError('Error sending password reset email');
      }
      setMessage('');
    }
  };

  return (
    <div className="auth-form">
      <h2>Reset Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handlePasswordReset}>Reset Password</button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <p>
        <Link to="/signin">Back to Sign In</Link>
      </p>
    </div>
  );
};

export default PasswordReset;