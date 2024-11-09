// // src/pages/DoctorPage.jsx
// import React, { useState } from 'react';

// const DoctorPage = () => {
//   // Example doctor data
//   const [doctors, setDoctors] = useState([
//     {
//       id: 1,
//       name: 'Dr. John Doe',
//       specialty: 'Cardiology',
//       experience: 10,
//       imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//       id: 2,
//       name: 'Dr. Sarah Smith',
//       specialty: 'Neurology',
//       experience: 8,
//       imageUrl: 'https://randomuser.me/api/portraits/women/40.jpg',
//     },
//     {
//       id: 3,
//       name: 'Dr. Alex Johnson',
//       specialty: 'Pediatrics',
//       experience: 5,
//       imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
//     },
//     {
//       id: 4,
//       name: 'Dr. Emily Stone',
//       specialty: 'Orthopedics',
//       experience: 12,
//       imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
//     },
//     {
//       id: 5,
//       name: 'Dr. Michael Lee',
//       specialty: 'Dermatology',
//       experience: 7,
//       imageUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
//     },
//   ]);

//   // State for search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // Filter doctors based on the search query
//   const filteredDoctors = doctors.filter(
//     (doctor) =>
//       doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle "Add Doctor" button click (simulate adding a new doctor)
//   const handleAddDoctor = () => {
//     const newDoctor = {
//       id: doctors.length + 1,
//       name: `Dr. New Doctor ${doctors.length + 1}`,
//       specialty: 'General Medicine',
//       experience: 2,
//       imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
//     };

//     setDoctors([...doctors, newDoctor]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading and Add Doctor Button */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-semibold text-gray-900">Doctors Directory</h2>
//           <button
//             onClick={handleAddDoctor}
//             className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
//           >
//             Add Doctor
//           </button>
//         </div>

//         {/* Search Field */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search doctors by name or specialty"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600"
//           />
//         </div>

//         {/* Doctor Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {filteredDoctors.length > 0 ? (
//             filteredDoctors.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full max-w-sm"
//               >
//                 {/* Doctor Image */}
//                 <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mx-auto mt-4">
//                   <img
//                     src={doctor.imageUrl}
//                     alt={doctor.name}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
//                   <p className="text-gray-600">{doctor.specialty}</p>
//                   <p className="text-gray-500">{doctor.experience} years of experience</p>

//                   <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
//                     <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition duration-300">
//                       View Details
//                     </button>
//                     <span className="text-gray-400">ID: {doctor.id}</span>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-3">No doctors found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorPage;




// // src/pages/DoctorPage.jsx
// import React, { useState } from 'react';

// const DoctorPage = () => {
//   // Example doctor data
//   const [doctors, setDoctors] = useState([
//     {
//       id: 1,
//       name: 'Dr. John Doe',
//       email: 'john.doe@email.com',
//       category: 'Cardiologist',
//       experience: 10,
//       rating: 4.5,
//       specialization: 'Heart Diseases',
//       qualification: 'MD, FACC',
//       imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//       id: 2,
//       name: 'Dr. Sarah Smith',
//       email: 'sarah.smith@email.com',
//       category: 'Neurologist',
//       experience: 8,
//       rating: 4.2,
//       specialization: 'Brain & Spine',
//       qualification: 'MD, DNB Neurology',
//       imageUrl: 'https://randomuser.me/api/portraits/women/40.jpg',
//     },
//     {
//       id: 3,
//       name: 'Dr. Alex Johnson',
//       email: 'alex.johnson@email.com',
//       category: 'Pediatrician',
//       experience: 5,
//       rating: 4.0,
//       specialization: 'Children Care',
//       qualification: 'MBBS, MD Pediatrics',
//       imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
//     },
//     {
//       id: 4,
//       name: 'Dr. Emily Stone',
//       email: 'emily.stone@email.com',
//       category: 'Orthopedic Surgeon',
//       experience: 12,
//       rating: 4.8,
//       specialization: 'Bone & Joint Care',
//       qualification: 'MS Orthopedics, FICS',
//       imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
//     },
//     {
//       id: 5,
//       name: 'Dr. Michael Lee',
//       email: 'michael.lee@email.com',
//       category: 'Dermatologist',
//       experience: 7,
//       rating: 4.3,
//       specialization: 'Skin Care',
//       qualification: 'MD Dermatology',
//       imageUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
//     },
//   ]);

//   // State for search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // Handle "Add Doctor" button click (simulate adding a new doctor)
//   const handleAddDoctor = () => {
//     const newDoctor = {
//       id: doctors.length + 1,
//       name: `Dr. New Doctor ${doctors.length + 1}`,
//       email: 'new.doctor@email.com',
//       category: 'General Medicine',
//       experience: 2,
//       rating: 3.5,
//       specialization: 'General Health',
//       qualification: 'MBBS',
//       imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
//     };

//     setDoctors([...doctors, newDoctor]);
//   };

//   // State to track which doctor is being edited
//   const [editingDoctorId, setEditingDoctorId] = useState(null);
//   const [updatedDoctorInfo, setUpdatedDoctorInfo] = useState({
//     name: '',
//     email: '',
//     category: '',
//     experience: '',
//     rating: '',
//     specialization: '',
//     qualification: '',
//   });

//   // Handle editing a doctor's details
//   const handleEditDoctor = (doctor) => {
//     setEditingDoctorId(doctor.id);
//     setUpdatedDoctorInfo({
//       name: doctor.name,
//       email: doctor.email,
//       category: doctor.category,
//       experience: doctor.experience,
//       rating: doctor.rating,
//       specialization: doctor.specialization,
//       qualification: doctor.qualification,
//     });
//   };

//   // Handle saving the updated details
//   const handleSaveDoctorDetails = (doctorId) => {
//     setDoctors((prevDoctors) =>
//       prevDoctors.map((doctor) =>
//         doctor.id === doctorId
//           ? { ...doctor, ...updatedDoctorInfo }
//           : doctor
//       )
//     );
//     setEditingDoctorId(null); // Close the edit form
//   };

//   // Filter doctors based on the search query
//   const filteredDoctors = doctors.filter(
//     (doctor) =>
//       doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading and Add Doctor Button */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-semibold text-gray-900">Doctors Directory</h2>
//           <button
//             onClick={handleAddDoctor}
//             className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
//           >
//             Add Doctor
//           </button>
//         </div>

//         {/* Search Field */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search doctors by name or specialty"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
//           />
//         </div>

//         {/* Doctor Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {filteredDoctors.length > 0 ? (
//             filteredDoctors.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full max-w-sm"
//               >
//                 {/* Doctor Image */}
//                 <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mx-auto mt-4">
//                   <img
//                     src={doctor.imageUrl}
//                     alt={doctor.name}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>

//                 <div className="p-6">
//                   {/* Doctor Information */}
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {doctor.name}
//                   </h3>
//                   <p className="text-gray-600">Category: {doctor.category}</p>
//                   <p className="text-gray-500">Experience: {doctor.experience} years</p>
//                   <p className="text-gray-500">Rating: {doctor.rating} / 5</p>
//                   <p className="text-gray-600">Specialization: {doctor.specialization}</p>
//                   <p className="text-gray-600">Qualification: {doctor.qualification}</p>
//                   <p className="text-gray-600">Email: {doctor.email}</p>

//                   {/* Edit Button */}
//                   {editingDoctorId === doctor.id ? (
//                     <div className="mt-4">
//                       {/* Edit Form */}
//                       <div className="space-y-2">
//                         <input
//                           type="text"
//                           value={updatedDoctorInfo.name}
//                           onChange={(e) =>
//                             setUpdatedDoctorInfo({ ...updatedDoctorInfo, name: e.target.value })
//                           }
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                           placeholder="Name"
//                         />
//                         <input
//                           type="email"
//                           value={updatedDoctorInfo.email}
//                           onChange={(e) =>
//                             setUpdatedDoctorInfo({ ...updatedDoctorInfo, email: e.target.value })
//                           }
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                           placeholder="Email"
//                         />
//                         <input
//                           type="text"
//                           value={updatedDoctorInfo.category}
//                           onChange={(e) =>
//                             setUpdatedDoctorInfo({ ...updatedDoctorInfo, category: e.target.value })
//                           }
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                           placeholder="Category"
//                         />
//                         <input
//                           type="number"
//                           value={updatedDoctorInfo.experience}
//                           onChange={(e) =>
//                             setUpdatedDoctorInfo({ ...updatedDoctorInfo, experience: e.target.value })
//                           }
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                           placeholder="Experience"
//                         />
//                         <input
//                           type="number"
//                           value={updatedDoctorInfo.rating}
//                           onChange={(e) =>
//                             setUpdatedDoctorInfo({ ...updatedDoctorInfo, rating: e.target.value })
//                           }
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                           placeholder="Rating"
//                         />
//                         <input
//                           type="text"
//                           value={updatedDoctorInfo.specialization}
//                           onChange={(e) =>
//                             setUpdatedDoctorInfo({ ...updatedDoctorInfo, specialization: e.target.value })
//                           }
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                           placeholder="Specialization"
//                         />
//                         <input
//                           type="text"
//                           value={updatedDoctorInfo.qualification}
//                           onChange={(e) =>
//                             setUpdatedDoctorInfo({ ...updatedDoctorInfo, qualification: e.target.value })
//                           }
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                           placeholder="Qualification"
//                         />
//                       </div>
//                       <div className="mt-4 flex justify-between">
//                         <button
//                           onClick={() => handleSaveDoctorDetails(doctor.id)}
//                           className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => setEditingDoctorId(null)}
//                           className="bg-gray-400 hover:bg-gray-300 text-white font-semibold py-2 px-4 rounded-lg"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <button
//                       onClick={() => handleEditDoctor(doctor)}
//                       className="mt-4 bg-gray-600 hover:bg-gray-500 text-white py-2 px-6 rounded-lg transition-all duration-300"
//                     >
//                       Edit Details
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center col-span-3">No doctors found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorPage;

import React, { useState } from "react";
import { Search, PlusCircle } from "lucide-react"; // PlusCircle for the Add Doctor button
import DoctorCard from "../components/DoctorCard"; // Import the DoctorCard component

const DoctorPage = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      email: "john.doe@email.com",
      category: "Cardiologist",
      experience: 10,
      rating: 4.5,
      specialization: "Heart Diseases",
      qualification: "MD, FACC",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Dr. Sarah Smith",
      email: "sarah.smith@email.com",
      category: "Neurologist",
      experience: 8,
      rating: 4.2,
      specialization: "Brain & Spine",
      qualification: "MD, DNB Neurology",
      imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    // You can add more doctors here as necessary
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [editingDoctorId, setEditingDoctorId] = useState(null);
  const [newDoctorInfo, setNewDoctorInfo] = useState({
    name: "",
    email: "",
    category: "",
    experience: "",
    specialization: "",
    qualification: "",
    imageUrl: "",
  });
  const [isCreatingNewDoctor, setIsCreatingNewDoctor] = useState(false); // Track if we're creating a new doctor

  // Function to handle creating a new doctor
  const handleCreateNewDoctor = () => {
    setDoctors([
      ...doctors,
      {
        id: doctors.length + 1,
        ...newDoctorInfo, // Include the new doctor details from the state
        rating: 0, // Default rating
      },
    ]);
    setIsCreatingNewDoctor(false); // Close the create form after saving
    setNewDoctorInfo({ name: "", email: "", category: "", experience: "", specialization: "", qualification: "", imageUrl: "" }); // Reset the new doctor state
  };

  // Handle edit doctor action
  const handleEditDoctor = (doctor) => {
    setEditingDoctorId(doctor.id);
    setNewDoctorInfo({
      name: doctor.name,
      email: doctor.email,
      category: doctor.category,
      experience: doctor.experience,
      specialization: doctor.specialization,
      qualification: doctor.qualification,
      imageUrl: doctor.imageUrl,
    });
  };

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-semibold text-gray-800 mb-2">Doctors Directory</h2>
            <p className="text-gray-500">Find the best healthcare professionals for your needs</p>
          </div>

          {/* Button to create new doctor profile */}
          <button
            onClick={() => setIsCreatingNewDoctor(true)}
            className="flex items-center bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <PlusCircle className="mr-2" size={18} />
            Add New Doctor
          </button>
        </div>

        {/* New Doctor Form (only visible when creating a new doctor) */}
        {isCreatingNewDoctor && (
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Create New Doctor Profile</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  value={newDoctorInfo.name}
                  onChange={(e) => setNewDoctorInfo({ ...newDoctorInfo, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  value={newDoctorInfo.email}
                  onChange={(e) => setNewDoctorInfo({ ...newDoctorInfo, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Category</label>
                <input
                  type="text"
                  value={newDoctorInfo.category}
                  onChange={(e) => setNewDoctorInfo({ ...newDoctorInfo, category: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Experience (years)</label>
                <input
                  type="number"
                  value={newDoctorInfo.experience}
                  onChange={(e) => setNewDoctorInfo({ ...newDoctorInfo, experience: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Specialization</label>
                <input
                  type="text"
                  value={newDoctorInfo.specialization}
                  onChange={(e) => setNewDoctorInfo({ ...newDoctorInfo, specialization: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Qualification</label>
                <input
                  type="text"
                  value={newDoctorInfo.qualification}
                  onChange={(e) => setNewDoctorInfo({ ...newDoctorInfo, qualification: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Profile Image URL</label>
                <input
                  type="text"
                  value={newDoctorInfo.imageUrl}
                  onChange={(e) => setNewDoctorInfo({ ...newDoctorInfo, imageUrl: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleCreateNewDoctor}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Create Profile
              </button>
              <button
                onClick={() => setIsCreatingNewDoctor(false)}
                className="w-full bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white text-gray-700"
          />
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onEditClick={() => handleEditDoctor(doctor)}
            />
          ))}
        </div>

        {/* Modal for editing doctor details (if needed) */}
        {/* Add Modal Logic Here */}

      </div>
    </div>
  );
};

export default DoctorPage;
