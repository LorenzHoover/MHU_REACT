import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDetails = new FormData();
    formDetails.append("access_key", "0b21ee7a-38c9-45d3-b140-06147b12a163"); // Your Web3Forms Access Key
    formDetails.append("name", `${formData.firstName} ${formData.lastName}`);
    formDetails.append("email", formData.email);
    formDetails.append("phone", formData.phoneNumber);
    formDetails.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDetails,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been sent successfully.");
      e.target.reset();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      setShowModal(true); // Show the modal after successful submission
    } else {
      console.log("Error", data);
      setResult("Something went wrong. Please try again later.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Centered Information Text */}
        <div className="lg:col-span-2 text-center mb-8">
          <p className="text-xl font-bold leading-6 text-[#002D72]">
            For questions, feedback, or suggestions on improvement to MHU Study Lion, please fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F2AE00] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F2AE00] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F2AE00] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                id="phone-number"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F2AE00] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F2AE00] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#002D72] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0048A8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2AE00]"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Map Section */}
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.1513032093995!2d-82.54861442421627!3d35.82677478016821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f3988a4fdb97%3A0xe62c6a5f4e0405db!2sMars%20Hill%20University!5e0!3m2!1sen!2sus!4v1708987685301!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
            title="Mars Hill University Location"
          ></iframe>
        </div>

        {/* Result Message */}
        <div className="mt-4 text-center">
          <span className="text-lg text-green-600">{result}</span>
        </div>
      </div>

      {/* Modal */}
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        message="Thank you for contacting us. We have received your submission and are reviewing it. We will get back to you soon. MHU Study Lion Team."
      />
    </div>
  );
};

export default ContactUs;
