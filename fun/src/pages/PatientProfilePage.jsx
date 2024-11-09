import React, { useState } from "react";

// Dummy Data for Patient Profile
const dummyPatient = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  gender: "Male",
  dob: "1990-01-01",
  phone: "+1234567890",
  email: "johndoe@example.com",
  address: "123 Main St, Springfield, USA",
  emergencyContact: "+1234567890",
  medicalHistory: [
    {
      condition: "Allergy to Penicillin",
      startDate: "2015-05-20",
      endDate: "2015-06-15",
    },
    {
      condition: "Asthma since childhood",
      startDate: "1995-01-01",
      endDate: "Present",
    },
    {
      condition: "Previous surgery on right knee (2015)",
      startDate: "2015-03-10",
      endDate: "2015-03-12",
    },
  ],
  appointments: [
    {
      date: "2024-01-01",
      symptoms: "Headache, Fever",
      diagnosis: "Common Cold",
      prescribedMedicines: "Paracetamol 500mg",
      observations: "Mild fever, resting recommended",
      followUpDate: "2024-01-15",
    },
    {
      date: "2024-02-10",
      symptoms: "Cough, Sore Throat",
      diagnosis: "Viral Infection",
      prescribedMedicines: "Cough Syrup, Antibiotics",
      observations: "Coughing persistently, avoid cold foods",
      followUpDate: "2024-02-20",
    },
  ],
};

const PatientProfile = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [newVisit, setNewVisit] = useState({
    visitDate: "",
    symptoms: "",
    diagnosis: "",
    prescribedMedicines: "",
    observations: "",
    followUpDate: "",
  });
  const [showForm, setShowForm] = useState(false); // New state to toggle the form visibility

  // Function to handle form submission for adding a new visit
  const handleAddVisit = (e) => {
    e.preventDefault();
    console.log("New visit data submitted:", newVisit);
    setNewVisit({
      visitDate: "",
      symptoms: "",
      diagnosis: "",
      prescribedMedicines: "",
      observations: "",
      followUpDate: "",
    });
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">
        {dummyPatient.firstName} {dummyPatient.lastName}
      </h2>

      {/* Patient Basic Info */}
      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Patient Information</h3>
        <p><strong>Gender:</strong> {dummyPatient.gender}</p>
        <p><strong>Date of Birth:</strong> {dummyPatient.dob}</p>
        <p><strong>Email:</strong> {dummyPatient.email}</p>
        <p><strong>Phone:</strong> {dummyPatient.phone}</p>
        <p><strong>Address:</strong> {dummyPatient.address}</p>
        <p><strong>Emergency Contact:</strong> {dummyPatient.emergencyContact}</p>
      </div>

      {/* Patient Medical History with Dates */}
      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Medical History</h3>
        <ul className="list-disc pl-6">
          {dummyPatient.medicalHistory.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.condition}</span>
              {item.startDate && (
                <span className="text-sm text-gray-600 ml-2">
                  (From: {new Date(item.startDate).toLocaleDateString()} )
                </span>
              )}
              {item.endDate && (
                <span className="text-sm text-gray-600 ml-2">
                  {" "}to{" "}
                  {item.endDate === "Present"
                    ? "Present"
                    : new Date(item.endDate).toLocaleDateString()}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Button to toggle visit history */}
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="mt-4 p-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        {showHistory ? "Hide Visit History" : "View Visit History"}
      </button>

      {/* Show Visit History Table */}
      {showHistory && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Visit History</h3>
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Visit Date</th>
                <th className="p-2 border">Symptoms</th>
                <th className="p-2 border">Diagnosis</th>
                <th className="p-2 border">Medicines</th>
                <th className="p-2 border">Observations</th>
                <th className="p-2 border">Follow-up Date</th>
              </tr>
            </thead>
            <tbody>
              {dummyPatient.appointments.map((visit, index) => (
                <tr key={index}>
                  <td className="p-2 border">{visit.date}</td>
                  <td className="p-2 border">{visit.symptoms}</td>
                  <td className="p-2 border">{visit.diagnosis}</td>
                  <td className="p-2 border">{visit.prescribedMedicines}</td>
                  <td className="p-2 border">{visit.observations}</td>
                  <td className="p-2 border">{visit.followUpDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <br/>

      {/* Button to toggle "Add New Visit" form */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-6 p-2 bg-blue-600 text-white rounded"
      >
        {showForm ? "Cancel" : "Add New Visit"}
      </button>

      {/* Add New Visit Form */}
      {showForm && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Add New Visit</h3>
          <form onSubmit={handleAddVisit} className="space-y-4">
            <div>
              <label className="block">Visit Date</label>
              <input
                type="datetime-local"
                value={newVisit.visitDate}
                onChange={(e) =>
                  setNewVisit({ ...newVisit, visitDate: e.target.value })
                }
                className="p-2 border border-gray-300 w-full"
                required
              />
            </div>

            <div>
              <label className="block">Symptoms</label>
              <textarea
                value={newVisit.symptoms}
                onChange={(e) =>
                  setNewVisit({ ...newVisit, symptoms: e.target.value })
                }
                className="p-2 border border-gray-300 w-full"
                required
              ></textarea>
            </div>

            <div>
              <label className="block">Diagnosis</label>
              <textarea
                value={newVisit.diagnosis}
                onChange={(e) =>
                  setNewVisit({ ...newVisit, diagnosis: e.target.value })
                }
                className="p-2 border border-gray-300 w-full"
                required
              ></textarea>
            </div>

            <div>
              <label className="block">Prescribed Medicines</label>
              <textarea
                value={newVisit.prescribedMedicines}
                onChange={(e) =>
                  setNewVisit({ ...newVisit, prescribedMedicines: e.target.value })
                }
                className="p-2 border border-gray-300 w-full"
                required
              ></textarea>
            </div>

            <div>
              <label className="block">Observations</label>
              <textarea
                value={newVisit.observations}
                onChange={(e) =>
                  setNewVisit({ ...newVisit, observations: e.target.value })
                }
                className="p-2 border border-gray-300 w-full"
                required
              ></textarea>
            </div>

            <div>
              <label className="block">Follow-up Date</label>
              <input
                type="date"
                value={newVisit.followUpDate}
                onChange={(e) =>
                  setNewVisit({ ...newVisit, followUpDate: e.target.value })
                }
                className="p-2 border border-gray-300 w-full"
              />
            </div>

            <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">
              Add Visit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;
