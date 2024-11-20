import React, { useState } from "react";
import { forgotPassword } from "../firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          Reset Your Password
        </h2>
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gold"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-gold rounded-lg hover:bg-black"
          >
            Send Password Reset Email
          </button>
        </form>
        <p className="mt-4 text-center">
          Remembered your password?{" "}
          <a href="/login" className="text-gold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;