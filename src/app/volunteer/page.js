import React from 'react'
import Navbar from '../../components/Navbar'
const page = () => {
    return (
        <>
            <div className='bg-black h-screen w-screen'>
                <div class="flex flex-col items-center h-screen dark">
                <Navbar />
                    <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6 mt-20">
                        <h2 class="text-2xl font-bold text-gray-200 mb-4">Volunteer Application Form</h2>
                        <form class="flex flex-col">
                            <input placeholder="Full Name" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
                                <input placeholder="Email" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
                                    <input placeholder="Phone Number" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
                                        <input placeholder="ResQready ID" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
                                            <textarea placeholder="Motivation Letter" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="cover_letter"></textarea>
                                            <input placeholder="Resume" class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="file"/>

                                                <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Apply</button>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </>
                            )
}

                            export default page