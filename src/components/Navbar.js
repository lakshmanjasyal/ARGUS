"use client";
import React, { useState } from "react";
import Link from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Page = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDemoForm, setShowDemoForm] = useState(false); // State to control form visibility
  const [showPremiumForm, setShowPremiumForm] = useState(false); // State to control premium form

  const items = [
    { key: "Home", label: "Go to DashBoard" },
    { key: "login", label: "Login" },
    { key: "edit", label: "Edit Profile" },
    { key: "delete", label: "Delete Account" },
  ];

  const donations = [
    { key: "Basics", label: "Provide Foods and Shelter" },
    { key: "destructed", label: "Money and Medicine Donation" },
    { key: "funding", label: "Raise Funding" },
  ];

  const demos = [
    { key: "free demo", label: "Free Demo" },
    { key: "premium", label: "Premium" },
  ];

  const communities = [
    { key: "Trainings", label: "Training-Groups" },
    { key: "Events", label: "Events" },
  ];

  const rescue = [
    { key: "volunteer", label: "Become Volunteer" },
    { key: "shelter", label: "Provide Shelter Location" },
    { key: "doctor", label: "Connect to a Doctor" },
  ];

  const handleItemClick = (itemKey) => {
    setSelectedItem(itemKey);

    if (itemKey === "login") {
      window.location.href = "/login";
    } else if (itemKey === "Home") {
      window.location.href = "/";
    } else if (itemKey === "funding") {
      window.location.href = "/crowdfunding";
    } else if (itemKey === "volunteer") {
      window.location.href = "/volunteer";
    } else if (itemKey === "shelter") {
      window.location.href = "/location";
    } else if (itemKey === "doctor") {
      window.location.href = "/medicine";
    } else if (itemKey === "Basics") {
      window.location.href = "/foodshelter";
    } else if (itemKey === "destructed") {
      window.location.href = "/medfund";
    } else if (itemKey === "free demo") {
      setShowDemoForm(true); // Show the demo form when "free demo" is selected
      setShowPremiumForm(false); // Hide premium form if it's visible
    } else if (itemKey === "premium") {
      setShowPremiumForm(true); // Show the premium form
      setShowDemoForm(false); // Hide the demo form if it's visible
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Demo request submitted!");
  };

  const handlePremiumSubmit = (event) => {
    event.preventDefault();
    alert("Premium request submitted!");
  };

  return (
    <>
      <div className="bg-black h-16 text-white">
        <div className="absolute right-0">
          <button className="text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm">
            <Link href="/">Res'QReady</Link>
          </button>
          <button className="text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm">
            <Link href="/firstresponders">First Respond</Link>
          </button>

          <button className="text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm">
            <Link href="/courses">Training and Events</Link>
          </button>
          <button className="text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm">
            <Link href="/location">Evacuation Zones</Link>
          </button>

          <Dropdown className="bg-white">
            <DropdownTrigger className="bg-red-600">
              <Button variant="" className="text-white right-12 ml-8 mt-3 px-8 text-md rounded-md">
                Rescue and Search
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={rescue}>
              {(rescue) => (
                <DropdownItem key={rescue.key} onClick={() => handleItemClick(rescue.key)}>
                  {rescue.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>

          <Dropdown className="bg-white">
            <DropdownTrigger className="bg-red-600">
              <Button variant="" className="text-white right-12 -ml-3 mt-3 px-1 text-md rounded-md">
                Donations and Help
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={donations}>
              {(donations) => (
                <DropdownItem key={donations.key} onClick={() => handleItemClick(donations.key)}>
                  {donations.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>

          <Dropdown className="bg-white">
            <DropdownTrigger className="bg-red-600">
              <Button variant="" className="text-white right-8 -ml-6 mt-3 px-8 text-md rounded-md">
                Community
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={communities}>
              {(communities) => (
                <DropdownItem key={communities.key} onClick={() => handleItemClick(communities.key)}>
                  {communities.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>

          <Dropdown className="bg-white">
            <DropdownTrigger className="bg-red-600">
              <Button variant="" className="text-white right-8 -ml-6 mt-3 px-8 text-md rounded-md">
                Demo
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={demos}>
              {(demos) => (
                <DropdownItem key={demos.key} onClick={() => handleItemClick(demos.key)}>
                  {demos.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>

          <Dropdown className="bg-white">
            <DropdownTrigger className="bg-red-600">
              <Button variant="" className="text-white bg-red-600 right-6 mt-3 px-8 rounded-md">
                Get Started
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={items}>
              {(item) => (
                <DropdownItem key={item.key} onClick={() => handleItemClick(item.key)}>
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <hr className="bg-white" />

      {/* Free Demo Form */}
      {showDemoForm && (
        <div className="p-6 bg-white rounded-lg z-50 relative">
          <h3 className="text-xl font-semibold text-black mb-4">Request Free Demo</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block font-bold text-black">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-black">Phone Number</label>
              <input
                type="email"
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-black">Organization</label>
              <input
                type="text"
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="Enter organization name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-black">Area Of Coverage</label>
              <textarea
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="Mention your area of coverage and requirements"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block font-bold text-black">Number Of CCTVs Required</label>
              <input
                type="text"
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="less than 5"
                required
              />
            </div>
            <Button type="submit" variant="solid" className="bg-red-600 text-white">
              Submit
            </Button>
          </form>
        </div>
      )}

      {/* Premium Demo Dropdown */}
      {showPremiumForm && (
        <div className="p-6 bg-white rounded-lg z-50 relative">
          <h3 className="text-xl font-semibold text-black mb-4">Premium Demo Options</h3>
          <form onSubmit={handlePremiumSubmit}>
            <div className="mb-4">
              <label className="block font-bold text-black">Premium Package</label>
              <select
                className="w-full px-3 py-2 border text-black rounded-md"
                required
              >
                <option value="basic">Basic Premium</option>
                <option value="advanced">Advanced Premium</option>
                
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-bold text-black">Organization</label>
              <input
                type="text"
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="Enter organisation name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-black">Area Of Coverage</label>
              <textarea
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="Mention your area of coverage and requirements"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block font-bold text-black">Number Of CCTVs Required</label>
              <input
                type="text"
                className="w-full px-3 py-2 border  text-black  rounded-md"
                placeholder="more than 5"
                required
              />
            </div>
            <Button type="submit" variant="solid" className="bg-red-600 text-white">
              Submit
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Page;
