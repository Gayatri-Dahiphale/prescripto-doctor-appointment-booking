import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()
  const navigate = useNavigate()

  const [filterDoc, setFilterDoc] = useState([])

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {

    if (speciality) {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === speciality)
      )
    } else {
      setFilterDoc(doctors)
    }

  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>

      {/* Heading */}
      <p className="text-gray-600 text-base">
        Browse through the doctors specialist.
      </p>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">

        {/* Speciality Filter */}
        <div className="flex flex-col gap-4 text-sm text-gray-600">

          <p
            onClick={() => navigate('/doctors')}
            className={`w-full sm:w-auto border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-black transition-all ${
              speciality === undefined
                ? 'bg-blue-50 text-black'
                : ''
            }`}
          >
            General physician
          </p>

          <p
            onClick={() => navigate('/doctors/Gynecologist')}
            className={`w-full sm:w-auto border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-black transition-all ${
              speciality === 'Gynecologist'
                ? 'bg-blue-50 text-black'
                : ''
            }`}
          >
            Gynecologist
          </p>

          <p
            onClick={() => navigate('/doctors/Dermatologist')}
            className={`w-full sm:w-auto border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-black transition-all ${
              speciality === 'Dermatologist'
                ? 'bg-blue-50 text-black'
                : ''
            }`}
          >
            Dermatologist
          </p>

          <p
            onClick={() => navigate('/doctors/Pediatricians')}
            className={`w-full sm:w-auto border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-black transition-all ${
              speciality === 'Pediatricians'
                ? 'bg-blue-50 text-black'
                : ''
            }`}
          >
            Pediatricians
          </p>

          <p
            onClick={() => navigate('/doctors/Neurologist')}
            className={`w-full sm:w-auto border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-black transition-all ${
              speciality === 'Neurologist'
                ? 'bg-blue-50 text-black'
                : ''
            }`}
          >
            Neurologist
          </p>

          <p
            onClick={() => navigate('/doctors/Gastroenterologist')}
            className={`w-full sm:w-auto border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-black transition-all ${
              speciality === 'Gastroenterologist'
                ? 'bg-blue-50 text-black'
                : ''
            }`}
          >
            Gastroenterologist
          </p>

        </div>


        {/* Doctor Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {filterDoc.map((item, index) => (

            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >

              {/* Doctor Image */}
              <img
                className="bg-blue-50 w-full h-64 object-contain"
                src={item.image}
                alt={item.name}
              />

              {/* Doctor Details */}
              <div className="p-4">

                {/* Availability */}
                <div className="flex items-center gap-2 text-green-500 text-sm mb-1">

                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>

                  <p>Available</p>

                </div>

                {/* Doctor Name */}
                <p className="text-gray-900 text-lg font-medium">
                  {item.name}
                </p>

                {/* Speciality */}
                <p className="text-gray-600 text-sm">
                  {item.speciality}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Doctors