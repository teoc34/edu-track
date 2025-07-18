// src/pages/SelectSubjects.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const subjectsList = [
  { name: "Informatică", color: "bg-blue-100", emoji: "💻" },
  { name: "Matematică", color: "bg-yellow-100", emoji: "📐" },
  { name: "Economie", color: "bg-green-100", emoji: "💰" },
  { name: "Psihologie", color: "bg-pink-100", emoji: "🧠" },
  { name: "Istorie", color: "bg-red-100", emoji: "📜" },
  { name: "Geografie", color: "bg-teal-100", emoji: "🌍" },
];

const SelectSubjects = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggleSelect = (subject) => {
    setSelected((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handleContinue = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.error("Nu există utilizator autentificat.");
    return;
  }

  try {
    await setDoc(doc(db, "users", user.uid), {
      selectedSubjects: selected,
    }, { merge: true });

    console.log("Materii salvate în Firestore.");
    navigate("/dashboard");
  } catch (error) {
    console.error("Eroare la salvarea materiilor:", error);
  }
};

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#a36d75]">
        Alege materiile care te interesează
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {subjectsList.map((subject) => (
          <div
            key={subject.name}
            onClick={() => toggleSelect(subject.name)}
            className={`cursor-pointer p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all hover:scale-105 ${subject.color} ${selected.includes(subject.name) ? "ring-4 ring-[#a36d75]" : ""}`}
          >
            <span className="text-4xl mb-2">{subject.emoji}</span>
            <h3 className="text-xl font-semibold">{subject.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleContinue}
          className="bg-[#a36d75] text-white px-6 py-2 rounded-xl hover:opacity-90"
        >
          Continuă
        </button>
      </div>
    </div>
  );
};

export default SelectSubjects;