
import React, { useState } from 'react';

// Contact component
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

  // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  // Validates form inputs
    const validate = () => {
        const contactError = {};
        if (!formData.name) {
            contactError.name = alert('Name field cannot be empty');
        }
        if (!formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            contactError.email = alert('Email field cannot be empty');
        } else if (formData && !/\S+@\S+\.\S+/.test(formData.email)) {
            contactError.email = alert('Invalid email format');
        }
        if (!formData.message) {
            contactError.message = alert('Message field cannot be empty');
        }
        return contactError;
    };

// when you push submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted', formData);
        } else {
            setErrors(formErrors); 
        }
}   ;

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea className="messageBody" name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
