import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter instead of Router
import HomePage from './Pages/HomePage.jsx';
import Signup from './Pages/SIgnUp.jsx';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import UserData from './Pages/UserData.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/UserData" element={<UserData />} />
      </Routes>
    </Router>
  );
}

export default App;
