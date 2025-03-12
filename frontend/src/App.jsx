import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome-page";
import HomePage from "./pages/home-page";
import MoodJournal from "./pages/journal-page";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/journal" element={<MoodJournal />} />
      </Routes>
    </Router>
  );
};

export default App;
