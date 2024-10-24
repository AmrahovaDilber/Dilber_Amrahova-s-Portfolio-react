import React, { useRef, useState } from "react";
import "../assets/styles/ContactMe.scss";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const form = useRef();

  function validate() {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.surname) newErrors.surname = "Surname is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", 
    }));
  }

  const sendEmail = () => {
    emailjs
      .sendForm("service_38l5bqr", "template_fpr4tx2", form.current, "tLHxzJLhqO4YWH7bh")
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Form submitted successfully!");
          setFormData({ name: "", surname: "", email: "", message: "" }); 
        },
        (error) => {
          console.error("FAILED...", error); 
          alert("Failed to send email. Please try again later.");
        }
        
      );
  };


  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      sendEmail(); 
    }
  }

  return (
    <form className="contactme_form" ref={form} onSubmit={handleSubmit}>
    <h1 className="contactme_title">
      Interested in working together? Let’s connect!
    </h1>
  
    <div className="contactme_grid">
      <div className="contactme_input-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p className="contactme_error">{errors.name}</p>}
      </div>
  
      <div className="contactme_input-group">
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Surname"
        />
        {errors.surname && <p className="contactme_error">{errors.surname}</p>}
      </div>
  
      <div className="contactme_input-group email-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="contactme_error">{errors.email}</p>}
      </div>
  
      <div className="contactme_input-group contactme_full-width">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows="5"
        ></textarea>
        {errors.message && <p className="contactme_error">{errors.message}</p>}
      </div>
    </div>
  
    <button className="contactme_button" type="submit">
      Send
    </button>
  </form>
  
  );
}
