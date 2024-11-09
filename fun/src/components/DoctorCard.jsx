import React from "react";
import { Star, Briefcase, BookOpen, Award, Mail } from "lucide-react";

// Reusable DoctorCard component
const DoctorCard = ({
  doctor,
  onEditClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{doctor.name}</h3>
          <p className="text-gray-600 font-medium mb-2">{doctor.category}</p>
          <RatingStars rating={doctor.rating} />
        </div>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Briefcase className="w-5 h-5 mr-3 text-gray-500" />
            <span>{doctor.experience} years experience</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-5 h-5 mr-3 text-gray-500" />
            <span>{doctor.specialization}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Award className="w-5 h-5 mr-3 text-gray-500" />
            <span>{doctor.qualification}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="w-5 h-5 mr-3 text-gray-500" />
            <span>{doctor.email}</span>
          </div>
        </div>
        <button
          onClick={onEditClick}
          className="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-all duration-300"
        >
          Edit Details
        </button>
      </div>
    </div>
  );
};

// RatingStars component
const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-400"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}</span>
    </div>
  );
};

export default DoctorCard;
