import { React, useEffect, useState } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home';

import Pabx from './Components/Services/Pabx';
import Servers from './Components/Services/Servers'
import Cctv from './Components/Services/Cctv';
import WifinHotspot from './Components/Services/WifinHotspot';
import VideoIntercom from './Components/Services/VideoIntercom';
import FirewallnVpn from './Components/Services/FirewallnVpn';
import FibreCabling from './Components/Services/FibreCabling';
import Cat6cabling from './Components/Services/Cat6cabling';
import AccessControl from './Components/Services/AccessControl';
import Services from './Components/Services';
import Footer from './Components/Footer';
import About from './Components/About';



function App() {


  const coverStyle = {
    backgroundImage: `url('images/invertedcover.jpg')`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <>

      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services coverStyle={coverStyle} />} />
          <Route path='/about' exact element={<About coverStyle={coverStyle} />} />

          <Route path='/pabx' element={<Pabx coverStyle={coverStyle} />} />
          <Route path='/servers' element={<Servers coverStyle={coverStyle} />} />
          <Route path='/cctv' element={<Cctv coverStyle={coverStyle} />} />
          <Route path='/wifi' element={<WifinHotspot coverStyle={coverStyle} />} />
          <Route path='/video-intercom' element={<VideoIntercom coverStyle={coverStyle} />} />
          <Route path='/firewallnvpn' element={<FirewallnVpn coverStyle={coverStyle} />} />
          <Route path='/fibrecabling' element={<FibreCabling coverStyle={coverStyle} />} />
          <Route path='/cat6cabling' element={<Cat6cabling coverStyle={coverStyle} />} />
          <Route path='/accesscontrol' element={<AccessControl coverStyle={coverStyle} />} />

        </Routes>
        <Footer />


        <FloatingWhatsApp phoneNumber="971501136980" accountName="Muhammad Asim" className='right-0' allowClickAway ="true" />
      </div>

    </>

  );
}

export default App;
