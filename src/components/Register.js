import React, { useState } from 'react';
import '../styles/Register.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = ({ setGreeting }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Check if all fields are filled
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are mandatory');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setGreeting(`Hi, ${username}!`);
    console.log(`Registering with username: ${username}, email: ${email}, password: ${password}, and confirmPassword: ${confirmPassword}`);

    // Use navigate to redirect to the home page
    navigate('/');
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          <Link to="/">Register</Link>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
