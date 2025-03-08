import React from 'react';  
import {motion} from "framer-motion";
import {Link} from "react-router-dom"; 
import { useState } from 'react'; 

function MoodJournal() {
  const [entry, setEntry] = useState(""); 
  const [savedEntries, setSavedEnteries] = useState([]);

  const handleSave = () => {
    if(entry.trim() != ""){
      setSavedEnteries([...savedEntries, entry]);
    setEntry(""); 
    }
    
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-700 p-6">
      
      
      <nav className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-semibold">MindEase</h1>
        <div className="space-x-6">
          <Link to="/home" className="text-gray-600 hover:text-green-500">Home</Link>
          <Link to="/journal" className="text-gray-600 hover:text-green-500">Mood Journal</Link>
          <Link to="/insights" className="text-gray-600 hover:text-green-500">Insights</Link>
          <Link to="/settings" className="text-gray-600 hover:text-green-500">Settings</Link>
        </div>
      </nav>

      
      <motion.div 
        className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-medium mb-4">what's on your mind</h2>
        <textarea
          className="w-full h-40 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Write about your feelings, experiences, or thoughts..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600"
          onClick={handleSave}
        >
          Save Entry
        </motion.button>
      </motion.div>

      
      <div className="max-w-2xl mx-auto mt-8">
        {savedEntries.length > 0 && (
          <motion.div 
            className="p-6 bg-white shadow-md rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">Your Past Entries</h3>
            <ul className="text-gray-600 space-y-3">
              {savedEntries.map((entry, index) => (
                <li key={index} className="p-3 border-b last:border-none">
                  {entry}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default MoodJournal;