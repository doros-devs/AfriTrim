import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, googleSignIn } from "../firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(email, password);
    navigate("/login");
  };

  const handleGoogleSignup = async () => {
    await googleSignIn();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          Signup for AfriTrim
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
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
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Or sign up with:</p>
          <button
            onClick={handleGoogleSignup}
            className="w-full py-2 mt-2 text-white bg-black border border-gold rounded-lg hover:bg-gold"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
