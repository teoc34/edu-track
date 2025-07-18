// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const subjectsList = [
  { name: "Informatică", color: "bg-blue-100", emoji: "💻" },
  { name: "Matematică", color: "bg-yellow-100", emoji: "📐" },
  { name: "Economie", color: "bg-green-100", emoji: "💰" },
  { name: "Psihologie", color: "bg-pink-100", emoji: "🧠" },
  { name: "Istorie", color: "bg-red-100", emoji: "📜" },
  { name: "Geografie", color: "bg-teal-100", emoji: "🌍" },
];

const Dashboard = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubjects = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setSelectedSubjects(userData.selectedSubjects || []);
        }
      } catch (error) {
        console.error("Eroare la încărcarea materiilor:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-[#a36d75] mb-6">
        Dashboard EduTrack
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        Aici sunt toate materiile disponibile. Cele selectate de tine sunt evidențiate.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subjectsList.map((subject) => {
          const isSelected = selectedSubjects.includes(subject.name);
          return (
            <div
              key={subject.name}
              className={`p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all hover:scale-105 ${subject.color} ${
                isSelected ? "ring-4 ring-[#a36d75]" : ""
              }`}
            >
              <span className="text-4xl mb-2">{subject.emoji}</span>
              <h3 className="text-xl font-semibold">{subject.name}</h3>
              {isSelected && (
                <p className="text-sm text-[#a36d75] mt-2">Materie selectată</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/select-subjects")}
          className="bg-[#a36d75] text-white px-6 py-2 rounded-xl hover:opacity-90"
        >
          Modifică materiile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
