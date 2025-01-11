import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Welcome to Our App
         </h1>
         <div className="flex flex-col space-y-4">
            <Link
               to="/signup"
               className="w-40 text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
               Sign Up
            </Link>
            <Link
               to="/login"
               className="w-40 text-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
               Login
            </Link>
            <Link
               to="/profile"
               className="w-40 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition">
               Profile
            </Link>
            <Link
               to="/userdata"
               className="w-40 text-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
               User Data Entry/Display
            </Link>
         </div>
      </div>
   );
}

export default HomePage;
