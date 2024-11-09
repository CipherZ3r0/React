import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data, replace it with real data from your database
const patients = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    dob: '1990-06-15',
    gender: 'Male',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 Main St, City, Country',
    emergencyContact: '098-765-4321',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    dob: '1985-08-20',
    gender: 'Female',
    phone: '234-567-8901',
    email: 'jane.smith@example.com',
    address: '456 Elm St, City, Country',
    emergencyContact: '987-654-3210',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    dob: '1992-09-10',
    gender: 'Female',
    phone: '345-678-9012',
    email: 'alice.johnson@example.com',
    address: '789 Oak St, City, Country',
    emergencyContact: '876-543-2109',
  },
  // Add more sample patients here...
];

const PatientListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter patients based on the search query (searching by phone number)
  const filteredPatients = patients.filter((patient) =>
    patient.phone.includes(searchQuery) // Search in the phone number field
  );

  // Function to highlight matching part of the phone number
  const highlightMatch = (phoneNumber, query) => {
    if (!query) return phoneNumber;

    // Create a regular expression that matches the query part (case-insensitive)
    const regex = new RegExp(`(${query})`, 'gi');
    
    // Replace the matching part with highlighted HTML
    return phoneNumber.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-300">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Patient List</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by phone number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full max-w-md"
        />
      </div>

      {/* If no patients are found */}
      {filteredPatients.length === 0 && searchQuery && (
        <p className="text-red-500 font-semibold">No number found</p>
      )}

      {/* Patient Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Phone</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Gender</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="border-t hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-700">{`${patient.firstName} ${patient.lastName}`}</td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {highlightMatch(patient.phone, searchQuery)}
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{patient.email}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{patient.gender}</td>
                <td className="py-4 px-6 text-sm">
                  <Link
                    to={`/patients/${patient.id}`}
                    className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                  >
                    View Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientListingPage;
