import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import Catalog from "../components/Catalog"; // adjust the path as per your folder


const Doctors = () => {
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality && doctors.length > 0) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };



  useEffect(() => {
    if(doctors && doctors.length > 0){
      applyFilter();
      setLoading(false);
    }
    else setLoading(true);
    // applyFilter();
  }, [doctors, speciality]);



  if (loading) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <p className="text-gray-600 mb-5"></p>
        <div className="flex flex-col sm:flex-row items-start gap-5">
          {/* Filter Button (Mobile) */}
          <button className="py-1 px-3 border rounded text-sm transition-all sm:hidden animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </button>
          
          {/* Left Sidebar - Specialist Categories */}
          <div className="flex-col gap-4 text-sm text-gray-600 flex">
            {[
              "Gynecologist",
              "General physician", 
              "Dermatologist",
              "Pediatricians",
              "Neurologist",
              "Gastroenterologist"
            ].map((specialty, index) => (
              <div
                key={index}
                className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all animate-pulse"
              >
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            ))}
          </div>
          
          {/* Right Content - Doctor Cards Grid */}
          <div className="w-full grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden animate-pulse shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Doctor Image Placeholder */}
                <div className="w-full h-48 bg-gray-200"></div>
                
                <div className="p-4">
                  {/* Availability Status */}
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                  
                  {/* Doctor Name */}
                  <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                  
                  {/* Specialty */}
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
        >
          Filter
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-red-500"
                  } `}
                >
                  <p
                    className={`w-2 h-2 ${
                      item.available ? "bg-green-500" : "bg-red-500"
                    }  rounded-full`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
