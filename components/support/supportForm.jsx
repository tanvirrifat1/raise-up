"use client";
import { useState } from "react";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
    massage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-28">
      <form
        className="flex flex-col items-center  p-4  rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          className="w-4/5 border-2 border-black rounded py-2 px-3 text-black leading-tight focus:outline-none my-3"
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="John Doe"
        />
        <input
          className="w-4/5 border-2 border-black rounded py-2 px-3 text-black leading-tight focus:outline-none my-3"
          name="address"
          type="text"
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          className="w-4/5 border-2 border-black rounded py-2 px-3 text-black leading-tight focus:outline-none my-3"
          name="contactNumber"
          type="number"
          onChange={handleChange}
          placeholder="Contact Number"
        />
        <input
          className="w-4/5 border-2 border-black rounded py-2 px-3 text-black leading-tight focus:outline-none my-3"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          className="w-4/5 border-2 border-black rounded py-2 px-3 text-black leading-tight focus:outline-none my-3"
          name="massage"
          onChange={handleChange}
          placeholder="Massage"
          rows={10}
        />
        <button className="w-4/5 border-2 bg-blue border-deepBlue rounded py-2 px-3 text-white focus:outline-none my-3 uppercase text-sm font-normal">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SupportForm;
