import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Work() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='bg-custom-image bg-no-repeat'>
     
      <div className=" pt-8 sm:pt-16 flex flex-col items-center">
        <h1 className="text-2xl text-blue-950 sm:text-3xl sm:px-11 mx-11 md:text-4xl font-bold my-4 sm:my-9">
        How A&A Telecom works, you ask?
        </h1>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <div className="flex flex-wrap my-6 sm:my-11 justify-center sm:justify-between px-4 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-28" >
        <div className="w-full  sm:w-1/2 md:w-3/12 shadow-xl shadow-blue-950/50 rounded-md my-4 sm:mx-2 bg-white" data-aos="fade-up">
          <div className="h-48 sm:h-52 mx-4 my-4">
            <div className="flex justify-center">
              <img src="images/icons/fast.png" className="h-16 sm:h-10 md:h-12" alt="Fast Service" />
            </div>
            <h2 className="text-base sm:text-lg md:text-base font-bold mt-3 sm:mt-5">FAST SERVICE</h2>
            <p className="text-slate-500 mt-3 sm:mt-4 sm:text-xs lg:text-base ">
            Our services are designed for optimal speed and efficiency. We prioritize swift responses and seamless interactions
              </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-3/12 shadow-xl shadow-blue-950/50 rounded-md my-4 sm:mx-2 bg-white" data-aos="fade-up">
          <div className="h-48 sm:h-52 mx-4 my-4">
            <div className="flex justify-center">
              <img src="images/icons/tick-mark.png" className="h-16 sm:h-10 md:h-12" alt="Best Quality" />
            </div>
            <h2 className="text-base sm:text-lg md:text-base font-bold mt-3 sm:mt-5">BEST QUALITY</h2>
            <p className="text-slate-500 mt-3 sm:mt-4 sm:text-xs lg:text-base">
            From the products we offer to the support we provide, quality is our hallmark.
              </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-3/12 shadow-xl shadow-blue-950/50 rounded-md my-4 sm:mx-2 bg-white" data-aos="fade-up">
          <div className="h-48 sm:h-52 mx-4 my-4">
            <div className="flex justify-center">
              <img src="images/icons/rating.png" className="h-12 sm:h-10 md:h-6 my-4 sm:my-3" alt="Customer Satisfaction" />
            </div>
            <h2 className="text-base sm:text-lg md:text-base font-bold mt-1 sm:mt-4">CUSTOMER SATISFACTION</h2>
            <p className="text-slate-500 mt-3 sm:mt-2 sm:text-xs lg:text-base">
            From the moment you engage with our services, your needs and preferences are our top priority
              </p>
          </div>
        </div>
      </div>
      <div>
      
        <div className="flex flex-col text-center items-center mx-4 sm:mx-16 px-4 sm:px-32 my-6 sm:my-32">
          <div className='h-1 bg-red-700 rounded w-36 '></div>
          <p className="font-bold text-base sm:text-xl pt-2 sm:pt-9" data-aos="fade-down">
          "We provide free resources regarding web design and web development to inspire design-oriented front-end developers, which you will like very much."
          </p>
         
          <h4 className="text-red-700 font-bold text-sm sm:text-base pt-3 sm:pt-5" data-aos="fade-right">
            A&A Telecom
          </h4>
          <h4 className="text-slate-500 text-base sm:text-lg" data-aos="fade-up">
          Team of A&A Telecom
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Work;
