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
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-black border-2 border-gold rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gold mb-6 text-center">Super Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block text-gold font-medium">
            Admin Pin:
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter special code"
              className="mt-2 w-full px-4 py-2 border border-gold rounded bg-black text-gold placeholder-gold focus:outline-none focus:ring focus:ring-gold focus:border-gold"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 bg-gold text-black font-semibold rounded hover:bg-opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
