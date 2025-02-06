import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
const page = () => {
  return (
    <>
    <div>
    <Navbar/>
    <div classNameName='bg-red-100 h-screen w-screen'>
        <div className="w-full max-w-md bg-gray-300 rounded-xl shadow-md p-6 ml-40 mt-28">
            <p className='text-center text-2xl'>Medicinal Help</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>

            <form className="flex flex-col">
            <input placeholder="Full Name" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
            <input placeholder="Phone Number" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="phone"/>
            <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
                <option value="product-1">Severe Pain</option>
                <option value="product-2">Severe Injury</option>    
                <option value="product-3">Internal Fracture</option>
                <option value="product-4">Fatal Injury</option>
                <option value="product-4">Nausea</option>
            </select>
            <input placeholder="Severity (1-5)" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number"/>
            <textarea placeholder="Feedback" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="Describe Condition if Possible!"></textarea>

            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
            </form>
        </div>
        <div className=''>
            <p className='absolute top-32 right-[29rem] text-xl font-bold bg-red-300 p-2 rounded-lg '>List of Medicines Provided</p>
            <div className='absolute right-96 '>
                <input className='border-1 rounded-lg p-2 border-gray-600' placeholder='Enter the Name of Medicines Required!'/>
                <button className='mx-4 border-1  rounded-lg bg-red-400 p-2'>Submit</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default page