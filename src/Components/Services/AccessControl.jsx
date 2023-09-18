import {React , useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function AccessControl({coverStyle}) {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
            Access Control</h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/access-control.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-3xl my-9 font-bold text-blue-950" data-aos = "fade-right">

          Access Control
        </h1>
        <p className='font-light mx-3 text-justify sm:mx-9 pb-11' data-aos = "fade-up">
          Access control is a data security process that enables organizations to manage who is authorized to access corporate data and resources. Secure access control uses policies that verify users are who they claim to be and ensures appropriate control access levels are granted to users.</p>
          <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />
      
    </div>
  )
}

export default AccessControl