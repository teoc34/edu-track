// src/pages/LandingPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-section.json";
import aboutAnimation from "../assets/aboutme.json";
import appAnimation from "../assets/aboutapp.json";
import contactAnimation from "../assets/contact.json";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md dark:shadow-lg">
        <h1 className="text-2xl font-bold">LearnWithTeo</h1>
        <div className="flex items-center gap-4">
          <Link to="/signup" className="hover:text-[#a36d75]">Sign Up</Link>
          <Link to="/login" className="hover:text-[#a36d75]">Login</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform transform hover:rotate-12"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10">
        <motion.div {...fadeInUp} className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Învață structurat. Urmărește-ți progresul.</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Creează-ți un cont, alege materia și explorează lecții, quiz-uri, flashcards și progres live.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link to="/signup" className="bg-[#a36d75] text-white px-6 py-2 rounded-xl hover:scale-105 transition">Creează cont</Link>
            <Link to="/login" className="border border-[#a36d75] text-[#a36d75] px-6 py-2 rounded-xl hover:bg-[#a36d75] hover:text-white transition">Autentificare</Link>
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="w-[300px] md:w-[400px]">
          <Lottie animationData={heroAnimation} loop={true} />
        </motion.div>
      </section>

      {/* About Me */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center px-6 py-16 gap-10 bg-gray-100 dark:bg-[#2a2a2a]">
        <motion.div {...fadeInUp} className="max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Despre mine</h3>
          <p className="text-gray-800 dark:text-gray-300">
            Sunt Teodora, pasionată de învățare, organizare și dezvoltare personală. Am creat această platformă pentru toți cei care își doresc o experiență de studiu interactivă și motivantă.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="w-[300px] md:w-[400px]">
          <Lottie animationData={aboutAnimation} loop={true} />
        </motion.div>
      </section>

      {/* About App */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10">
        <motion.div {...fadeInUp} className="max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Despre platformă</h3>
          <p className="text-gray-800 dark:text-gray-300">
            Platforma este împărțită pe materii și capitole, include carduri de memorare (flashcards), quiz-uri, teorie și sistem de urmărire a progresului. Gândită special pentru a te ajuta să înveți mai bine și mai ușor.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="w-[300px] md:w-[400px]">
          <Lottie animationData={appAnimation} loop={true} />
        </motion.div>
      </section>

      {/* Contact */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center px-6 py-16 gap-10 bg-gray-100 dark:bg-[#2a2a2a]">
        <motion.div {...fadeInUp} className="max-w-xl text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="text-gray-800 dark:text-gray-300">
            Pentru colaborări sau feedback: <a href="mailto:teodoracara.smm@yahoo.com" className="text-[#a36d75] hover:underline">teodoracara.smm@yahoo.com</a>
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="w-[300px] md:w-[400px]">
          <Lottie animationData={contactAnimation} loop={true} />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} LearnWithTeo. Toate drepturile rezervate.
      </footer>
    </div>
  );
};

export default LandingPage;
