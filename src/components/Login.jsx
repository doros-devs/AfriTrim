import React, { useState } from "react";
import { login, googleSignIn } from "../firebase/auth"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleGoogleLogin = async () => {
    await googleSignIn();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          Login to AfriTrim
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gold"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gold"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-gold rounded-lg hover:bg-black"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Or login with:</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 mt-2 text-white bg-black border border-gold rounded-lg hover:bg-gold"
          >
            Google
          </button>
        </div>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-gold hover:underline">
            Sign up here
          </a>
        </p>
        <p className="text-center">
          <a href="/forgot-password" className="text-gold hover:underline">
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;