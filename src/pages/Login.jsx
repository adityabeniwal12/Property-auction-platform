import React, { useState } from 'react';
import Properties from './Properties'; 
import "../index.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true); 
    } else {
      alert("Please enter email and password.");
    }
  };

  if (isLoggedIn) {
    return <Properties />;
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center', color: 'white' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'inline-block', marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '250px', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '250px', borderRadius: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px' }}>Log In</button>
      </form>
    </div>
  );
};

export default Login;