import { motion } from "framer-motion";
import { Link } from "react-router-dom";  

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-700 p-6">
      
      
      <nav className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-semibold">MindEase</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-green-500">Home</Link>
          <Link to="/journal" className="text-gray-600 hover:text-green-500">Mood Journal</Link>
          <Link to="/insights" className="text-gray-600 hover:text-green-500">Insights</Link>
          <Link to="/settings" className="text-gray-600 hover:text-green-500">Settings</Link>
        </div>
      </nav>

      
      <motion.div 
        className="flex flex-col items-center text-center mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-medium">Hi there, How are you feeling today?</h2>
        <div className="mt-6 flex space-x-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="text-3xl p-4 bg-white shadow-md rounded-full hover:bg-green-100"
          >😊</motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="text-3xl p-4 bg-white shadow-md rounded-full hover:bg-green-100"
          >😐</motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="text-3xl p-4 bg-white shadow-md rounded-full hover:bg-green-100"
          >😢</motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="text-3xl p-4 bg-white shadow-md rounded-full hover:bg-green-100"
          >😠</motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
