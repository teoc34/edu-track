// src/pages/SignUp.jsx
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { googleProvider, auth } from "../firebase";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    console.log("User created:", userCredential.user);

    // Redirecționare
    navigate("/select-subjects");

  } catch (error) {
    console.error("Signup error:", error.message);
  }
};


const navigate = useNavigate();


// ...
const handleSocialSignUp = async (provider) => {
  try {
    if (provider === "Google") {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user:", result.user);
    }
  } catch (error) {
    console.error("Google login error:", error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1a1a1a] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 dark:bg-[#2a2a2a] shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#a36d75]">Creează un cont nou</h2>

        <label className="block mb-2">Nume utilizator</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-600"
          required
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-600"
          required
        />

        <label className="block mb-2">Parolă</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-6 rounded bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#a36d75] text-white py-2 rounded hover:opacity-90 mb-4"
        >
          Înregistrează-te
        </button>

        <div className="text-center text-gray-600 dark:text-gray-400 mb-4">sau continuă cu</div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => handleSocialSignUp("Google")}
            className="flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#1e1e1e]"
          >
            <FcGoogle className="text-xl" /> Continuă cu Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialSignUp("Apple")}
            className="flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#1e1e1e]"
          >
            <FaApple className="text-xl" /> Continuă cu Apple
          </button>
          <button
            type="button"
            onClick={() => handleSocialSignUp("Facebook")}
            className="flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-[#1e1e1e]"
          >
            <FaFacebook className="text-xl text-blue-600" /> Continuă cu Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
