import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function Servers({ coverStyle }) {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })

  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos="fade-right">
            Servers </h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/server.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
      <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos="fade-right">

        Servers Provision
      </h1>
        <p className='font-light mx-3 text-justify sm:mx-9 pb-11' data-aos="fade-up">
          A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. In theory, whenever computers share resources with client machines they are considered servers. There are many types of servers, including web servers, mail servers, and virtual servers
        </p>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>

      <Help />
    </div>
  )
}

export default Servers