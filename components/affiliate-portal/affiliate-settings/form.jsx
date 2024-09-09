"use client";
import { useState } from "react";

const AffiliateForm = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    domainName: "",
    hostingProvider: "",
    hostingUsername: "",
    hostingPassword: "",
    emailNotification: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDef
  };

  return (
    <div className="mt-28">
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <input
          className="rounded py-2 px-3 text-black leading-tight focus:outline-none my-3 bg-white shadow-md"
          name="storeName"
          type="text"
          onChange={handleChange}
          placeholder="Store Name"
        />

        <input
          className=" rounded py-2 px-3 text-black leading-tight focus:outline-none my-3 bg-white shadow-md"
          name="domainName"
          type="text"
          onChange={handleChange}
          placeholder="Domain Name"
        />
        <input
          className=" rounded py-2 px-3 text-black leading-tight focus:outline-none my-3 bg-white shadow-md"
          name="hostingProvider"
          type="text"
          onChange={handleChange}
          placeholder="Hosting Provider"
        />
        <input
          className=" rounded py-2 px-3 text-black leading-tight focus:outline-none my-3 bg-white shadow-md"
          name="hostingUsername"
          type="text"
          onChange={handleChange}
          placeholder="Hosting Username"
        />
        <input
          className=" rounded py-2 px-3 text-black leading-tight focus:outline-none my-3 bg-white shadow-md"
          name="hostingPassword"
          type="password"
          onChange={handleChange}
          placeholder="Hosting Password"
        />
        <input
          className=" rounded py-2 px-3 text-black leading-tight focus:outline-none my-3 bg-white shadow-md"
          name="emailNotification"
          type="email"
          onChange={handleChange}
          placeholder="Email Notification"
        />
        <button className=" border-2 bg-extraDeepBlue border-extraDeepBlue rounded py-2 px-3 text-white focus:outline-none my-3 text-sm font-normal">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AffiliateForm;
