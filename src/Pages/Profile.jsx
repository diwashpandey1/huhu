import React, {useState} from "react";

const Profile = () => {
   const placeholderPhoto = "https://via.placeholder.com/150"; // Placeholder image URL
   const [profile, setProfile] = useState({
      photo: placeholderPhoto,
      email: "user@example.com",
      number: "123-456-7890",
      gender: "Male",
   });

   const handleRemovePhoto = () => {
      setProfile({...profile, photo: placeholderPhoto});
   };

   const handleUploadPhoto = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = () => {
            setProfile({...profile, photo: reader.result});
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
               User Profile
            </h2>
            <div className="flex flex-col items-center space-y-4">
               {/* Profile Photo */}
               <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <img
                     src={profile.photo}
                     alt="Profile"
                     className="w-full h-full object-cover"
                  />
               </div>
               {/* Buttons */}
               <div className="flex space-x-4">
                  <button
                     onClick={handleRemovePhoto}
                     className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                     Remove Profile Pic
                  </button>
                  <label className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600">
                     Upload Profile Pic
                     <input
                        type="file"
                        onChange={handleUploadPhoto}
                        className="hidden"
                        accept="image/*"
                     />
                  </label>
               </div>
            </div>
            {/* User Details */}
            <div className="mt-6 space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Email
                  </label>
                  <p className="mt-1 text-gray-800">{profile.email}</p>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Phone Number
                  </label>
                  <p className="mt-1 text-gray-800">{profile.number}</p>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-600">
                     Gender
                  </label>
                  <p className="mt-1 text-gray-800">{profile.gender}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
