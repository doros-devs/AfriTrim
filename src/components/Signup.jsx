import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, googleSignIn } from "../firebase/auth";
import { updateProfile } from "firebase/auth";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Send the data to the backend for validation
      const response = await axios.post(
        "http://localhost:5555/api/users/signup/validate",
        {
          role,
          name,
          email,
        }
      );

      if (response.status === 200) {
        // Step 2: Create user on Firebase after backend validation passes
        const userCredential = await signup(email, password);

        if (userCredential) {
          const user = userCredential.user;

          // Update the user profile with display name
          await updateProfile(user, {
            displayName: role,
          });

          // Step 3: Send token and user details to backend for verification and storing role information
          const token = await user.getIdToken();
          await axios.post("http://localhost:5555/api/users/signup/verify", {
            token,
            role,
            name,
            email,
          });

          // Navigate to the login page
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const userCredential = await googleSignIn();
      if (userCredential) {
        const user = userCredential.user;
        const token = await user.getIdToken();

        // Send user data for verification and storage
        const response = await axios.post(
          "http://localhost:5555/api/users/signup/verify",
          {
            token,
            role: "client",
            name: user.displayName || "Google User",
            email: user.email || "",
          }
        );

        if (response.status === 201) {
          navigate("/login");
        } else {
          console.error(
            "Signup failed: Unexpected response from server",
            response
          );
          alert("Signup failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Google Signup failed:", error);
      if (error.response) {
        // Backend-specific error (response available)
        console.error("Backend Error:", error.response.data);
        alert(`Google Signup failed: ${error.response.data.error}`);
      } else {
        alert(
          "Google Signup failed. Please check your network connection and try again."
        );
      }
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          Signup for AfriTrim
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gold"
            placeholder="Full Name"
            required
          />
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
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gold"
          >
            <option value="client">Client</option>
            <option value="barber">Barber</option>
            <option value="admin">Admin</option>
          </select>
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
