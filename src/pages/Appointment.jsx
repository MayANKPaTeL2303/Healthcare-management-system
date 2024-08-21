import React, { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialist: "",
    phoneno: "",
  });
  const [displaysubmit, setDisplaysubmit] = useState(false);
  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    console.log("Form submitted with data:", formData);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newAppointment = await response.json();
        createAppointment(newAppointment);
        setFormData({
          name: "",
          email: "",
          specialist: "",
          phoneno: "",
          dob: ""
        });
        alert("Appointment booked Sucessfully");
      } else {
        alert("Failed booking");
      }
    } catch (error) {
      console.log("Error");
      alert("An error occurred while booking the appointment");
    }
  };

  const showsubmit = () => {
    setDisplaysubmit(true);
  };

  return (
    <div className="p-14 border-s-black">
      <form onSubmit={handlesubmit} className="max-w-md mx-auto">
        {/* Full Name Input */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handlechange}
            value={formData.name}
            required
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name of the patient
          </label>
        </div>

        {/* Email Input */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            onChange={handlechange}
            value={formData.email}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phoneno"
            placeholder=" "
            onChange={handlechange}
            value={formData.phoneno}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="phoneno"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          {/* Date of Birth Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="dob"
              placeholder=" "
              // onChange={handlechange}
              value={formData.dob}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="dob"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of Appointment
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="specialist"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Specialist:{" "}
            </label>
            <input
              type="text"
              list="specialist"
              name="specialist"
              onChange={handlechange}
              value={formData.specialist}
              placeholder=" "
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <datalist id="specialist">
              <option value="Allergists/Immunologists" />
              <option value="Anesthesiologists" />
              <option value="Cardiologists" />
              <option value="Colon and Rectal Surgeons" />
              <option value="Dermatologists" />
              <option value="Endocrinologists" />
              <option value="Gastroenterologists" />
              <option value="Geriatric Medicine Specialists" />
              <option value="Hematologists" />
              <option value="Infectious Disease Specialists" />
              <option value="Neurologists" />
              <option value="Ophthalmologists" />
              <option value="Pathologists" />
              <option value="Physiatrists" />
              <option value="Plastic Surgeons" />
              <option value="Psychiatrists" />
              <option value="Radiologists" />
              <option value="General Surgeons" />
              <option value="Urologists" />
            </datalist>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={showsubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <br />
      </form>
      <div>
        {displaysubmit && (
          <div className="flex text-center justify-center p-6">
            Your Appointment is sucessfully submitted
          </div>
        )}
      </div>
      {/* <div><div className="flex text-center justify-center p-6" >Your Appointment is sucessfully submitted</div></div> */}
    </div>
  );
}

export default Appointment;
