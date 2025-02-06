'use client';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const page = () => {
  const [location, setLocation] = useState('College of engineering, vadakara');

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(e.target.search.value);
  };

  return (
    <>
      <div>
        <Navbar />
        <form onSubmit={handleSearch} className="mx-auto mt-4 flex justify-center">
          <input
            type="text"
            name="search"
            placeholder="Enter a location"
            defaultValue={location}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>
        <iframe
          width="80%"
          className="mx-auto mt-10 rounded-3xl"
          height="700"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=14&output=embed`}
        ></iframe>
      </div>
    </>
  );
};

export default page;