import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function FirewallnVpn({ coverStyle }) {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos="fade-right">
            Firewall and VPN</h1>
        </div>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/firewall-vpn.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos="fade-right">

          Firewall and VPN
        </h1>
        <p className='font-light mx-3 text-justify sm:mx-9 pb-11' data-aos="fade-up">
          Although we know that technology has improved people life but it also has demerits which include Plagiarism, Digital fraud, Phishing,  Pharming, etc. To protect a network we can use VPN or firewall.
          By using a firewall, you can access the Internet effectively, but unknown site penetration access is blocked by the firewall.Firewalls prevent cyber attacks by building a strong protective wall to protect user
          confidential data. On the other hand VPN keep your location unknown to others by creating a proxy network for secure connection.
        </p>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />

    </div>
  )
}

export default FirewallnVpn