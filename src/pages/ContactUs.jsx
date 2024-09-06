import React from "react";
import { useState } from "react";

const ContactUs = () => {
  const [data, setdata] = useState({
    username: "",
    email: "",
    message: "",
  });

  const setInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <section>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 border rounded"
        >
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={setInput}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={setInput}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              value={data.message}
              onChange={setInput}
              className="border p-2 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </section>
      {/* <section
        style={{
          margin: "20px auto",
          padding: "10px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          maxWidth: "700px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7033.258741846771!2d81.31891734972062!3d21.244899927485463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28db65364103d5%3A0x9ca0815dc09dac5f!2sIndian%20Institute%20of%20Technology%20Bhilai!5e0!3m2!1sen!2sin!4v1724743895387!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </section> */}
    </div>
  );
};

export default ContactUs;
