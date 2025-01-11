import React, {useState} from "react";
import {Link} from "react-router-dom";

const Signup = () => {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      password: "",
      confirmPassword: "",
   });

   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const {fullName, email, phone, gender, password, confirmPassword} =
         formData;
      // Validate passwords
      if (password !== confirmPassword) {
         alert("Passwords do not match!");
         return;
      }

      const signUpData = {
         name: fullName,
         email: email,
         phone: phone,
         gender: gender,
         password: password,
         confirmPassword: confirmPassword,
     };
     
      try {
         const response = await fetch("http://127.0.0.1:5001/api/document", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpData),
         });

         if (response.ok) {
            const result = await response.json(); // First read
            console.log("Document added successfully:", result);
            alert("Data added successfully!");
        } else {
            const errorResult = await response.json(); // Second read
            console.error("Error:", errorResult);
            alert("Error: " + errorResult.message || "Something went wrong!");
        }
        
      } catch (error) {
         console.error("Error: ", error);
         alert("Error adding data!");
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
               Sign Up
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
               {/* Full Name */}
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Full Name
                  </label>
                  <input
                     type="text"
                     name="fullName"
                     autoComplete="name"
                     value={formData.fullName}
                     onChange={handleChange}
                     required
                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               {/* Email */}
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Email
                  </label>
                  <input
                     type="email"
                     name="email"
                     autoComplete="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               {/* Phone Number */}
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Phone Number
                  </label>
                  <input
                     type="tel"
                     name="phone"
                     autoComplete="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     required
                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               {/* Gender */}
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Gender
                  </label>
                  <select
                     name="gender"
                     value={formData.gender}
                     onChange={handleChange}
                     required
                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                     <option value="">Select Gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                  </select>
               </div>
               {/* Password */}
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Password
                  </label>
                  <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     required
                     autoComplete="new-password"
                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               {/* Confirm Password */}
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Confirm Password
                  </label>
                  <input
                     type="password"
                     name="confirmPassword"
                     autoComplete="new-password"
                     value={formData.confirmPassword}
                     onChange={handleChange}
                     required
                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               {/* Submit Button */}
               <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Sign Up
               </button>
            </form>
            <div className="mt-6 flex flex-col space-y-4">
               <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                  Log In with Google
               </button>
               <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800">
                  Log In with Facebook
               </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
               Already have an account?{" "}
               <Link to="/login" className="text-blue-500 hover:underline">
                  Log In
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Signup;
