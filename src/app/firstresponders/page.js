'use client'
import React from 'react';
import './responders.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const page = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Get form values
        const name = e.target.elements.name.value;
        const address = e.target.elements.address.value;
        const city = e.target.elements.city.value;
        const state = e.target.elements.state.value;
        const zip = e.target.elements.zip.value;
        const severity = e.target.elements.country.value;
        const file = e.target.elements.file.files[0]; // Get the uploaded file
      
        if (file) {
          try {
            // Create a unique filename with name and date combination
            const fileExt = file.name.split('.').pop();
            const fileName = `${name}_${new Date().getTime()}.${fileExt}`;
      
            // Upload the file to Firebase Storage
            const storage = getStorage();
            const storageRef = ref(storage, `files/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
      
            // Listen for state changes and get the download URL
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                // Progress function ...
              },
              (error) => {
                console.error('Error uploading file:', error);
              },
              async () => {
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
      
                // Create a new document in the 'rescueResponders' collection with the file URL
                const docRef = await addDoc(collection(db, 'rescueResponders'), {
                  name,
                  address,
                  city,
                  state,
                  zip,
                  severity,
                  fileURL: downloadURL,
                });
                console.log('Document written with ID:', docRef.id);
                e.target.reset();
              }
            );
          } catch (error) {
            console.error('Error adding document:', error);
          }
        } else {
          console.error('No file selected');
        }
      };

  return (
    <>
      <div>
        <Navbar />
        <div className='flex flex-row justify-between mx-96 mt-40'>
          <div className="container mt-20">
            <div className="header">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Browse File to upload!</p>
            </div>
            <label htmlFor="file" className="footer">
              <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg>
              <p>Not selected file</p>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2"></path> <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2"></path> </g></svg>
            </label>
            <input
                id="file"
                type="file"
                accept="image/*"
                required
                />
          </div>
          <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm w-[40rem]">
            <h2 className="text-white font-bold text-lg">First Responding and helping Rescuers</h2>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="text-white" htmlFor="name">
                  Name
                </label>
                <input
                  placeholder="Your name"
                  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                  type="text"
                  id="name"
                />
              </div>

              <div className="mt-4">
                <label className="text-white" htmlFor="address">
                  Address
                </label>
                <textarea
                  placeholder="Your address"
                  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                  id="address"
                ></textarea>
              </div>

              <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                  <label className="text-white" htmlFor="city">
                    City
                  </label>
                  <input
                    placeholder="Your city"
                    className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                    id="city"
                    type="text"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-white" htmlFor="state">
                    State
                  </label>
                  <input
                    placeholder="Your state"
                    className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                    id="state"
                    type="text"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                  <label className="text-white" htmlFor="zip">
                    ZIP
                  </label>
                  <input
                    placeholder="Your ZIP code"
                    className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                    id="zip"
                    type="text"
                  />
                </div>

                <div className="flex flex-row space-x-2">
                  <div className="flex-1">
                    <label className="text-white" htmlFor="country">
                      Level of severity
                    </label>
                    <select
                      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                      id="country"
                    >
                      <option value="">Select Severity</option>

                      <optgroup label="Worst">
                        <option value="AF">Food not available</option>
                        <option value="DZ">Very hot temperature</option>
                        <option value="AO">Bad Health</option>
                        ...
                        <option value="ZW">Zimbabwe</option>
                      </optgroup>

                      <optgroup label="Asia">
                        <option value="AM">Armenia</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BH">Bahrain</option>
                        ...
                        <option value="YE">Yemen</option>
                      </optgroup>

                      <optgroup label="South America">
                        <option value="AR">Argentina</option>
                        <option value="BO">Bolivia</option>
                        <option value="BR">Brazil</option>
                        ...
                        <option value="VE">Venezuela</option>
                      </optgroup>

                      ...
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;