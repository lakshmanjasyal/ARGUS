import React from 'react'
import Image from 'next/image'
import PayQr from '../../assets/qr.png'
import Navbar from '../../components/Navbar';
const page = () => {
  return (
    <>
    <div className='bg-black text-white h-screen w-screen'>
    <Navbar/>
    <div className='p-14'>
        <div className='bg-gray-200 w-96  text-black rounded-3xl  h-96 p-3'>
            <p className='text-left ml-2'>Name : </p>
            <p className='text-left my-3 ml-2 '>Location :  </p>
            <p className='bg-cyan-100 rounded-md p-1'>Reason:</p>
            <p className='text-center mb-4 mt-20 text-lg bg-green-300 rounded-xl mx-12'>Donate here Please.👇</p>
            <Image src={PayQr} className='ml-28 rounded-2xl' width={140} height={140}></Image>
        </div>
    </div>
    </div>
    </>
  )
}

export default page