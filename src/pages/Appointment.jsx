import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Appointment() {

const [user,setUser] = useState({
  username: "",
  specialist: "",
  phone: "",
  date: "",
})


// Handling the input value on change
const handleInput = (e)=>{
  console.log(e)
  let name = e.target.name;
  let value = e.target.value
  setUser({
    ...user,
    [name]: value,
  })

};

const navigate = useNavigate();   

//Handling the form submition
const handleSubmit = async (e)=>{
  e.preventDefault();
  console.log(user)

  // Connecting backend with the frontend
  try {
    const response = await fetch(`http://localhost:5000/api/auth/appointment`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(user)
    });
    if(response.ok)
    {
      setUser({
        username: "",
        specialist: "",
        phone: "",
        date: ""
      })

    }
    console.log(response)
  } catch (error) {
    console.log("appointment",error)
  }
};

 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <main>
          <div className="section-registration">
            {/* Main registration code */}
            <div className="registration-form">
              <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
                Appointment Form
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-600 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Username"
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="specialist" className="block text-gray-600 mb-2">
                    Specialist 
                  </label>
                  <input
                    type="text"
                    name="specialist"
                    value={user.specialist}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Specialist"
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-600 mb-2">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="date"
                    className="block text-gray-600 mb-2"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={user.date}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Date"
                    onChange={handleInput}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Appointment;
