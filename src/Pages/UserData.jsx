import React from "react";
import { useLocation } from "react-router-dom";

const UserData = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        No user data available. Please log in first.
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Details</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Full Name:</span>
          <span className="text-gray-800">{user.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Email:</span>
          <span className="text-gray-800">{user.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Phone:</span>
          <span className="text-gray-800">{user.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Gender:</span>
          <span className="text-gray-800">{user.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default UserData;
