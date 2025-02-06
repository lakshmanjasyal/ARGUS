import Image from "next/image";
import Navbar from '../components/Navbar'
import '../style.css';
export default function Home() {
  return (
    <>
<div className="bg-gradient-to-r from-red-800 via-orange-700 to-yellow-600 h-screen w-screen text-white">


      <Navbar/>
      {/* <div className="h-60 w-96 rounded-e-full p-4 ml-24 mt-16 bg-blue-300">
        akdbj
      </div> */}
      <p className="text-8xl font-roboto font-bold  w-16 ml-[24rem] mt-24 mb-4 text-black">ARDUS </p>
      <p className="text-5xl font-robot  tracking-extra-widest   ml-[26rem] mt-5  mb-4 text-black">THE VISION</p>
     
      <p className="text-5xl font-sherif ml-[12rem] font-bold italic mt-[5rem] text-black">A community prepared ,</p>
      <p className="text-5xl font-sherif ml-[20rem] font-bold italic text-black">is a community protected.</p>
      <iframe src='https://my.spline.design/tvatimedoor-ff0791bda22ca9b15dc0e17c2982339e/' frameborder='0' width='30%' height='90%' className="rounded-full absolute right-12 top-24"></iframe>
    </div>
    </>
  );
}
/*
Here are some popular Google Fonts you can use:

Roboto
Open Sans
Lato
Montserrat
Oswald
Raleway
Poppins
Merriweather
Nunito
Playfair Display
Lobster
Ubuntu
Dancing Script
Inconsolata
Pacifico
A community prepared is a community protected.
*/