import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function ServicesCompnent() {

 

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const coverStyle = {
        backgroundImage: `url('images/globe.PNG')`,
        backgroundSize: '100% ',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='w-full flex mb-12 lg:my-12 text-white justify-between' style={coverStyle}>

            <div className='w-full bg-blue-950 bg-opacity-95 px-10 sm:px-11 py-11 text-start' >
                <div className='flex flex-col items-center justify-center'>

                    <h2 className='text-3xl font-bold text-red-700 mt-5' data-aos="fade-right">OUR SERVICES</h2>
                    <div className='h-1 bg-white my-4 rounded w-14 '></div>
                </div>
                <p className='my-5 font-thin  sm:mx-0 lg:mx-11' data-aos="fade-up">
                "Discover a world of seamless connectivity and communication with A&A Telecom. Our comprehensive range of services includes high-speed internet, crystal-clear voice communication, flexible data plans, mobile services, and tailored solutions for businesses. Whether you're at home or on the go, our reliable network keeps you connected. With a commitment to sustainability and 24/7 support, we're your trusted partner for all your telecom needs."
                </p>
                <p className='my-5 font-thin'>

                </p>
                <div className='flex justify-center'>

                    <button
                        class="bg-transparent px-3 py-2 my-4 rounded-md border shadow-custom border-white  hover:bg-red-700 hover:border-none">
                      <a href='/services'> Learn More</a>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ServicesCompnent