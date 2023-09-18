import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'
function WifinHotspot({ coverStyle }) {
 

  useEffect(() => {
    AOS.init({ duration: 2000 })

  }

  )
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
            Wifi & Hotspot</h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/wifi-hotspot.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos="fade-right">

          Wifi and Hotspot
        </h1>
        <p className='font-light mx-3 text-justify sm:mx-9 pb-11' data-aos="fade-up">
        Wifi is a wireless communication technology that is used for LAN(Local Area Networks), The network provider is having complete control over who can access its network. It is like a closed access as provider can change WiFi password or even limit can be imposed on the number of users who can have the facility of joining the network by constraining its access. Even the modem can be turned off leading to disconnect from network. and the hotspot provides internet to wireless devices by using wifi.
        </p>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />

    </div>
  )
}

export default WifinHotspot