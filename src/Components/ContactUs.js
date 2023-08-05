import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code to handle form submission here
    console.log("Form data:", formData);
    // You can send the data to a backend server or perform any other actions here.
  };

  return (
    <div>
    <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label>Subject:</label>
            <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label>Message:</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)};

export default ContactUs;
