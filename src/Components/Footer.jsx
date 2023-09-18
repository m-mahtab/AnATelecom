import { React} from 'react'


function Footer() {
  
  return (
    <div>
      <div className="flex flex-col sm:text-xs lg:text-base justify-evenly sm:flex-row mt-7 px-10  md:px-8 lg:px-10 xl:px-12 2xl:px-28 py-4 sm:py-11 bg-blue-100 font-light">
        <div className="text-start sm:w-1/2">
          <ul>
            <li className="font-semibold  lg:pb-3 mt-5 md:mt-0 sm:mb-0 ">CONTACT</li>
            <li>asim@telecom.com</li>
            <li>+971 50 113 6980</li>
            <li>+971 6 536 1208</li>
          </ul>
        </div>
        <div className="text-start sm:w-1/2 sm:pl-6">
          <ul>
            <li className="font-semibold lg:pb-3 mt-5 md:mt-0 sm:mb-0">COMPANY</li>
            <li>About Us</li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>Our Work</li>
          </ul>
        </div>
        <div className="text-start sm:w-1/2 sm:pl-6">
          <ul>
            <li className="font-semibold lg:pb-3 mt-5 md:mt-0 sm:pb-0">LEGAL</li>
            <li>Terms and Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Core Values</li>
          </ul>
        </div>
        <div className="mt-5 md:mt-0 sm:w-1/2 sm:pr-6">
          <span className="flex items-center">
            <img src="images/businesslogo.png" alt="logo" className="h-6" />
            <div className="flex font-sans  my-1">
              <h4 className="text-2xl lg:text-3xl text-red-700 font-semibold ">A&A</h4>
              <h4 className="text-2xl lg:text-3xl text-blue-900">Telecom</h4>
            </div>
          </span>
          <p className="font-light text-start  lg:mt-5">
          With a commitment to excellence, we strive to deliver the best services to meet your needs. Explore our range of solutions and experience the difference of working with a trusted partner.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
