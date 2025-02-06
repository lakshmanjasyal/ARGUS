"use client";
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Page = () => {
  const items = [
    {
      key: "Home",
      label: "Go to DashBoard",
    },
    {
      key: "login",
      label: "Login",
    },
    {
      key: "edit",
      label: "Edit Profile",
    },
    {
      key: "delete",
      label: "Delete Account",
    },
  ];
  const donations = [
    {
      key: "Basics",
      label: "Provide Foods and Shelter",
    },
    {
      key: "destructed",
      label: "Money and Medicine Donation",
    },
    {
      key: "funding",
      label: "Raise Funding",
    },
  ];
  const demos = [
    {
      key: "free demo",
      label: "Free Demo",
      path: './app/free'
    },
    {
      key: "premium",
      label: "Premium",
    },
    // {
    //   key: "funding",
    //   label: "CrowdFunding",
    // },
   
  ];
  const communities = [
    {
      key: "Trainings",
      label: "Training-Groups",
    },
    {
      key: "Events",
      label: "Events",
    },
    // {
    //   key: "funding",
    //   label: "CrowdFunding",
    // },
    {
      key: "Helps",
      label: "Helping-Hands",
    },
   
  ];
  const rescue = [
    {
      key: "volunteer",
      label: "Become Volunteer",
    },
    // {
    //   key: "Paths",
    //   label: "Locations within Area",
    // },
    {
      key: "shelter",
      label: "Provide Shelter Location",
    },
    {
      key: "doctor",
      label: "Connect to a Doctor",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemKey) => {
    setSelectedItem(itemKey);
    if (itemKey === "login") {
      window.location.href="/login";
    }
    if (itemKey === "Home") {
      window.location.href="/";
    }
    if (itemKey === "funding") {
      window.location.href="/crowdfunding";
    }
    if (itemKey === "volunteer") {
      window.location.href="/volunteer";
    }
    if (itemKey === "shelter") {
      window.location.href="/location";
    }
    if (itemKey === "doctor") {
      window.location.href="/medicine";
    }
    if (itemKey === "Basics") {
      window.location.href="/foodshelter";
    }
    if (itemKey === "destructed") {
      window.location.href="/medfund";
    }
    if (itemKey === "free demo") {
      window.location.href = "/demo1";
    }
    if (itemKey === "premium") {
      window.location.href = "/demo2";
    }
  };

  return (
    <>
      <div className="bg-black h-16 text-white">
        <div className="absolute right-0">
          <button  className=" text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm"><Link href='/'>Res'QReady</Link></button>
          <button  className=" text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm"><Link href='/firstresponders'>First Respond</Link></button>
          
          <button  className=" text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm"><Link href="/courses">Training and Events</Link></button>
          <button  className=" text-white text-md right-72 mt-5 px-1 mx-2 border-b-1 border-l-1 rounded-sm"><Link href='/location'>Evacuation Zones</Link></button>
          <Dropdown className="bg-white">
              <DropdownTrigger className="bg-red-600">
                <Button variant="" className=" text-white right-12 ml-8   mt-3 px-8 text-md  rounded-md">
                Rescue and Search
                </Button> 
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={rescue}>
                {(rescue) => (
                  <DropdownItem
                    key={rescue.key}
                    color={rescue.key === "delete" ? "danger" : "default"}
                    className={rescue.key === "delete" ? "text-danger" : ""}
                    onClick={() => handleItemClick(rescue.key)}
                  >
                    {rescue.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
          </Dropdown>
          <Dropdown className="bg-white">
              <DropdownTrigger className="bg-red-600">
                <Button variant="" className=" text-white right-12   -ml-3  mt-3 px-1 text-md  rounded-md">
                Donations and Help
                </Button> 
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={donations}>
                {(donations) => (
                  <DropdownItem
                    key={donations.key}
                    color={donations.key === "delete" ? "danger" : "default"}
                    className={donations.key === "delete" ? "text-danger" : ""}
                    onClick={() => handleItemClick(donations.key)}
                  >
                    {donations.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
          </Dropdown>
          <Dropdown className="bg-white">
              <DropdownTrigger className="bg-red-600">
                <Button variant="" className=" text-white right-8 -ml-6 mt-3 px-8 text-md  rounded-md">
                  Community
                </Button> 
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={communities}>
                {(communities) => (
                  <DropdownItem
                    key={communities.key}
                    color={communities.key === "delete" ? "danger" : "default"}
                    className={communities.key === "delete" ? "text-danger" : ""}
                    onClick={() => handleItemClick(communities.key)}
                  >
                    {communities.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
          </Dropdown>
          <Dropdown className="bg-white">
              <DropdownTrigger className="bg-red-600">
                <Button variant="" className=" text-white right-8 -ml-6 mt-3 px-8 text-md  rounded-md">
                  Demo
                </Button> 
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={demos}>
                {(  demos) => (
                  <DropdownItem
                    key={demos.key}
                    color={demos.key === "delete" ? "danger" : "default"}
                    className={demos.key === "delete" ? "text-danger" : ""}
                    onClick={() => handleItemClick(demos.key)}
                  >
                    {demos.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
          </Dropdown>
          
          
          <Dropdown className="bg-white">
            <DropdownTrigger className="bg-red-600">
              <Button variant="" className=" text-white bg-red-600 right-6 mt-3 px-8 rounded-md">
                Get Started
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={items}>
              {(item) => (
                <DropdownItem
                  key={item.key}
                  color={item.key === "delete" ? "danger" : "default"}
                  className={item.key === "delete" ? "text-danger" : ""}
                  onClick={() => handleItemClick(item.key)}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <hr className="bg-white" />
    </>
  );
};

export default Page;
