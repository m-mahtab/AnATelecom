import {React , useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function Pabx({coverStyle}) {
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
           PABX</h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/pabx-and-pbx-system.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-2xl md:text-3xl  lg:text-4xl my-9 font-bold" data-aos = "fade-right">

          Private Automatic Branch Exchange (PABX)
        </h1>
        <p className='font-light mx-3 text-justify sm:mx-9 b-11' data-aos = "fade-up">Managing calls can be tiresome for employees — thanks to the latest technological advancements, you can direct all calls efficiently with the help of PABX systems. A PABX phone system is an effective solution consisting of hardware and software to manage calls. This system receives incoming calls and routes these calls with any human assistance.</p>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />
     
    </div>
  )
}

export default Pabx