import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function VideoIntercom({ coverStyle }) {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos="fade-right">
            Video Intercom</h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/video-intercom.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos="fade-right">

          Video Intercom
        </h1>
        <p className='font-light mx-3 text-justify sm:mx-9 pb-11' data-aos="fade-up">
          A video intercom is a communication system that allows visual and audio communication between two or more parties in different locations, typically within a building or a complex. It combines the functionality of an intercom system with video transmission, enabling individuals to see and talk to each other in real-time.</p>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />

    </div>
  )
}

export default VideoIntercom