import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setFormSubmitted(true);
        setError('');
        setFormData({
          name: '',
          email: '',
          issue: '',
          message: '',
        });
      } else {
        console.log('Failed with status:', response.status);
        setError('Something went wrong. Please try again.');
        setFormSubmitted(false);
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      {formSubmitted && (
        <div className="mb-4 text-green-600 font-medium border border-green-500 p-2 rounded">
          Thank you! Your message has been sent. Our team will contact you within 24 hours.
        </div>
      )}

      {error && (
        <div className="mb-4 text-red-600 font-medium border border-red-500 p-2 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        />

        <select
          name="issue"
          value={formData.issue}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        >
          <option value="">Select Your Issue</option>
          <option value="technical">Technical Issue</option>
          <option value="pricing">Pricing Inquiry</option>
          <option value="support">Customer Support</option>
          <option value="other">Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          rows="4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;