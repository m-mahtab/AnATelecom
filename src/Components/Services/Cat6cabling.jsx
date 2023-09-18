import {React , useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'

function Cat6cabling({coverStyle}) {

  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <div>
       <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
            Cat6 Cabling</h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/cat6.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos = "fade-right">

          Category 6 Cabling
        </h1>
        <p className='font-light mx-3 text-justify sm:mx-9 pb-11' data-aos = "fade-up">
          Category 6 cable, also commonly known as network, LAN or Ethernet data cable, is a 4 twisted pair sheathed copper wire cable that can support data transfer rates of up to 1 gigabits (1,000 megabits). This higher bandwidth allows for quick transferral of large files in an office network.</p>
          <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />
     
    </div>
  )
}

export default Cat6cabling