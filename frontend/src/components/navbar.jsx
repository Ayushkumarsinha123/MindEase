import React from 'react';  
import {Link} from "react-router-dom";  

function Navbar() {
 return  (
    <nav className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-semibold">MindEase</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-green-500">Home</Link>
          <Link to="/journal" className="text-gray-600 hover:text-green-500">Mood Journal</Link>
          <Link to="/insights" className="text-gray-600 hover:text-green-500">Insights</Link>
          <Link to="/settings" className="text-gray-600 hover:text-green-500">Settings</Link>
        </div>
      </nav>
  )
}

export default Navbar;  