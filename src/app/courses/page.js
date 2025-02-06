'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANxz8WBqptSITooMqQcQZQKulBRRIOIfI",
  authDomain: "magnathon-f4e37.firebaseapp.com",
  projectId: "magnathon-f4e37",
  storageBucket: "magnathon-f4e37.appspot.com",
  messagingSenderId: "207520828809",
  appId: "1:207520828809:web:4da3391bec9b51f7bea558",
  measurementId: "G-6EQ5NKGKY5"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const page = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(firestore, 'courses');
      const coursesSnapshot = await getDocs(coursesCollection);
      const fetchedCourses = coursesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(fetchedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-red-800 via-orange-700 to-yellow-600 h-screen w-screen text-white" style={{backgroundColor: 'white'}}>
      
        <Navbar />
        <p className='text-6xl italic text-center mt-20'>VR-Training</p>
        <div className='ml-12 mt-10'>
          {courses.filter((course) => course.category === 'vr').map((course) => (
            <div className='bg-gray-400 w-80 rounded-xl h-72' key={course.id}>
              <p className=''>{course.name}</p>
              <p className=''>{course.contentInfo}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer">Watch Video</a>
            </div>
          ))}
        </div>
        <p className='text-6xl text-center italic mt-20'>Survival Techniques</p>
        <div className='ml-12 mt-10'>
          {courses.filter((course) => course.category === 'survival').map((course) => (
            <div className='bg-gray-400 w-80 rounded-xl h-72' key={course.id}>
              <p className=''>{course.name}</p>
              <p className=''>{course.contentInfo}</p>
              <video src={course.link} controls autoPlay={false} width="100%" height="200"></video>
              <a href={course.link} target="_blank" rel="noopener noreferrer">Watch Video</a>
            </div>
          ))}
        </div>
        <p className='text-6xl text-center italic  mt-20'>Training</p>
        <div className='ml-12 mt-10'>
          {courses.filter((course) => course.category === 'training').map((course) => (
            <div className='bg-gray-400 w-80 rounded-xl h-72' key={course.id}>
              <p className=''>{course.name}</p>
              <p className=''>{course.contentInfo}</p>
              <img src={course.link} controls width="100%" height="200"></img>
              <a href={course.link} target="_blank" rel="noopener noreferrer">Watch Full Video</a>
            </div>
          ))}
        </div>
        <p className='text-6xl text-center italic mt-20'>Courses</p>
        <div className='ml-12 mt-10'>
          {/* Add logic to display courses from other categories if needed */}
        </div>
     
      </div>
    </>
  );
};

export default page;