import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function Cctv({ coverStyle }) {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos="fade-right">
            CCTV</h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/cctv-image.jpeg' alt='cctv-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos="fade-right">

          CCTV Installation
        </h1>
        <p className='font-light mx-3 sm:mx-9 pb-11 text-justify' data-aos="fade-up">
          A CCTV (Closed Circuit TV) DVR is a device used to record security camera video to be viewed either live or played back at a later time. If you own a business or property that you can't access easily enough, you may want to install a Closed Circuit TV system. This is great because you can watch and review video whenever you want. A CCTV system will record activity when it occurs and save the video to a DVR (Digital Video Recorder) to view. They can be programmed to record ALL activity or record only when movement is detected. If you record only on activity, this will save disk space since it isn't always running. This setup can be installed on a computer that you already own.</p>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />

    </div>
  )
}

export default Cctv
