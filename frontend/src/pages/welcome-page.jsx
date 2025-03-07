import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-100 to-white text-gray-700">
      <motion.h1
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Find Your mental Peace from MindEase
      </motion.h1>

      <motion.button
        className="px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-full shadow-md transition hover:bg-green-600 hover:shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 4px 15px rgba(0, 150, 0, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/home")}
      >
        Welcome to MindEase
      </motion.button>
    </div>
  );
}

export default WelcomePage;
