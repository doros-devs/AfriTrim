import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (code === '0794886149') {
      navigate('/dashboard');
    } else {
      alert('Invalid code!');
    }
  };

  return (
    <div>
      <h2>Super Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Admin Pin:
          <br />
          <br />
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter special code"
            required
          />
          <br />
          <br />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
