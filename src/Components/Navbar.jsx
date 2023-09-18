import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownItems = [
    { text: 'All Services', href: '/services' },
    { text: 'PABX', href: '/pabx' },
    { text: 'Servers', href: '/servers' },
    { text: 'CCTV Installation', href: '/cctv' },
    { text: 'Wifi & Hotspot', href: '/wifi' },
    { text: 'Video Intercom', href: '/video-intercom' },
    { text: 'Firewall & VPN', href: '/firewallnvpn' },
    { text: 'Fibre Cabling', href: '/fibrecabling' },
    { text: 'Cat 6 Cabling', href: '/cat6cabling' },
    { text: 'Access Control', href: '/accesscontrol' },
  ];
  const dropdownItemList = dropdownItems.map((item, index) => (
    <a
      key={index}
      className="block text-sm sm:text-base font-light border-b border-white py-2 hover:bg-white hover:text-black"
      href={item.href}
    >
      {item.text}
    </a>
  ));

  return (
    <div>
      <nav className="mx-11 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-28 py-3 sm:py-5 text-blue-900">
        <div className="flex items-center justify-between">
          <span>
            <Link className="flex items-center" to="/">

              <img src="images/businesslogo.png" alt="logo" className="h-6 sm:h-9 pl-4 " />
              <div className="flex font-sans">
                <h4 className="text-2xl sm:text-4xl text-custom-red font-semibold">A&A</h4>
                <h4 className="text-2xl sm:text-4xl">Telecom</h4>
              </div>
            </Link>
          </span>

          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-2xl sm:text-4xl px-4 py-2 focus:outline-none
             w-[28px] h-[28px] object-contain">
              &#9776;
            </button>
          </div>

          <div
            className={`navigation-menu ${isMenuOpen ? "block" : "hidden"
              } md:flex  font-light items-center space-x-4  justify-end md:font-semibold
            mx-2 lg:mx-4  rounded-lg bg-blue-950 md:bg-white absolute md:relative z-40  top-14 md:top-0 right-0 min-w-[100px] py-2 md:py-0`}
          >
            <ul className="md:flex  md:space-x-2 lg:space-x-5 text-white md:text-blue-950 ">
              <li className="cursor-pointer border-b border-white md:border-none py-1 md:py-0 ">
                <a href="/">Home</a>
              </li>
              <li className="cursor-pointer border-b border-white md:border-none py-1 md:py-0">
                <a href="/about">About</a>
              </li>
              <li className="group relative cursor-pointer  py-1 md:py-0">
                <button className="dropbtn">
                  <a href="/services">Services</a>
                </button>
                <div className="z-50  dropdown-content hidden group-hover:block absolute bg-black w-48  mt-1 
                shadow-lg text-white right-0 top-8 lg:top-8 ">
                  <div className="dropdown-content hidden rounded-lg group-hover:block absolute bg-black w-36 md:w-56 mt-1 shadow-lg text-white">
                    {dropdownItemList}
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex">
              <a
                href="https://api.whatsapp.com/send?phone=971501136980"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="hidden shadow-green sm:inline-block bg-green-600 text-white rounded-md px-3 sm:px-4 mx-2 sm:mx-4 my-2 py-2">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
