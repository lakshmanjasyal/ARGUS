'use client';

import React, { useState } from 'react';
import './style.css';
import { Alert } from 'react-bootstrap'; // Import from React Bootstrap
import { AlertTriangle, MapPin, Camera, Upload, Users } from 'lucide-react';

const Page = () => {
  const [location, setLocation] = useState('MES College Marampally');
  const [selectedRiskType, setSelectedRiskType] = useState('');
  const [reports, setReports] = useState([
    { id: 1, type: 'flood', location: 'MES College Area', reports: 4, status: 'critical' },
    { id: 2, type: 'infrastructure', location: 'West Campus', reports: 2, status: 'pending' },
  ]);

  const riskTypes = [
    { id: 'flood', label: 'Flood Risk', color: 'bg-blue-500', textColor: 'text-blue-500' },
    { id: 'landslide', label: 'Landslide', color: 'bg-orange-500', textColor: 'text-orange-500' },
    { id: 'infrastructure', label: 'Infrastructure', color: 'bg-red-500', textColor: 'text-red-500' },
  ];
  

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(e.target.search.value);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-red-800 via-orange-700 to-yellow-600 text-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg p-4 rounded-lg mx-4 mt-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">Evacuation Zone Mapper</h1>
        </div>
      </nav>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mt-8 flex justify-center px-4">
        <input
          type="text"
          name="search"
          placeholder="Enter a location"
          defaultValue={location}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Alert for Critical Areas */}
        <Alert variant="danger" className="mb-8">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <Alert.Heading className="text-lg font-semibold">
            4 critical risk areas have been reported near {location}
          </Alert.Heading>
        </Alert>

        {/* Risk Reporting Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Report Risk Area</h2>

            {/* Risk Type Selection */}
            <div className="space-y-6 mb-8">
  {riskTypes.map((type) => (
    <button
      key={type.id}
      onClick={() => setSelectedRiskType(type.id)}
      className={`w-full p-5 rounded-xl border-2 flex items-center gap-4 transition-all duration-300
        ${selectedRiskType === type.id 
          ? 'border-transparent bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg transform scale-105' 
          : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400'}`}
    >
      <div className={`w-6 h-6 rounded-full ${type.color} shadow-md`} />
      <span className={`font-semibold text-lg ${type.textColor}`}>{type.label}</span>
    </button>
  ))}
</div>


            {/* Upload Controls */}
            <div className="space-y-6">
              <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                <Camera className="h-6 w-6 text-gray-500" />
                <span className="text-gray-600">Take Photo</span>
              </button>

              <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                <Upload className="h-6 w-6 text-gray-500" />
                <span className="text-gray-600">Upload Image</span>
              </button>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Recent Reports</h2>
            <div className="space-y-6">
              {reports.map(report => (
                <div key={report.id} className="border rounded-xl p-6 bg-gray-50 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span className="font-medium text-gray-800">{report.location}</span>
                    </div>
                    <span className={`px-3 py-2 rounded-full text-sm ${
                      report.status === 'critical' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{report.reports} reports</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-xl p-4">
          <iframe
            className="w-full h-[500px] rounded-xl"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=14&output=embed`}
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Page;
