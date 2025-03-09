import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/navbar";

function HomePage() {
  const [mood, setMood] = useState(""); 

  
  const moodSuggestions = {
    "😊": "That's great! Keep up the positivity. Try sharing a gratitude journal entry today. 🌿",
    "😐": "Feeling neutral? Take a mindful walk or listen to some relaxing music. 🎶",
    "😢": "It's okay to feel sad. Try writing down your thoughts in a journal or reading an uplifting quote. 💙",
    "😠": "Anger is natural. Take a deep breath and try a short meditation session to calm your mind. 🌿",
    "😰": "Anxiety can be tough. Try a 5-minute breathing exercise or listen to soothing sounds. 🌊"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-700 p-6">
      
      
      <Navbar/>

      
      <motion.div 
        className="flex flex-col items-center text-center mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-medium">Hi there, How are you feeling today?</h2>
        <div className="mt-6 flex space-x-4">
          {Object.keys(moodSuggestions).map((emoji) => (
            <motion.button 
              key={emoji}
              whileHover={{ scale: 1.1 }}
              className="text-3xl p-4 bg-white shadow-md rounded-full hover:bg-green-100"
              onClick={() => setMood(emoji)}
            >
              {emoji}
            </motion.button>
          ))}
        </div>
      </motion.div>

      
      {mood && (
        <motion.div 
          className="mt-8 p-6 bg-white shadow-lg rounded-lg text-center max-w-lg mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold">Suggestion for You:</h3>
          <p className="mt-2 text-gray-600">{moodSuggestions[mood]}</p>
        </motion.div>
      )}
    </div>
  );
}

export default HomePage;
