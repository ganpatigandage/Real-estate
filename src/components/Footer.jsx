import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun, FaPhone, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'
import { MdMail } from 'react-icons/md'
import { FaGlobe } from 'react-icons/fa6'


<div
  id="icon-box"
  className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
>
  <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
    <FaArrowUp className="text-white" />
  </Link>
</div>


const Footer = () => {

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10 `}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>About Us</h1>
          <p className='text-slate-200 text-justify'>As Real Estate company, we provide comprehensive and expert end-to-end solutions to our clients. We always strive to find the finest options for our customers and support them in making wise and responsible decisions.</p>
          <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-100 transition-transform duration-300'>
              <FaFacebookF className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-100 transition-transform duration-300'>
              <FaInstagram className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-100 transition-transform duration-300'>
              <FaTwitter className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-100 transition-transform duration-300'>
              <FaYoutube className='size-5' />
            </div>
          </div>
          <h1 className='text-white mt-8'> RERA No. A52100039728</h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-7' />
            <p className='text-slate-200'>Punerealty B.U. Bhandari hillside phase 1, Office no 104,1st floor Baner Opposite Royal Enfield Showroom Baner- 411045</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200'> +91 9158383123</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white size-5' />
            <p className='text-slate-200'> 919890055558 </p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <MdMail className='text-white size-5' />
            <p className='text-slate-200'>inquiry@punerealty.in</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaGlobe className='text-white size-5' />
            <p className='text-slate-200'>www.punerealty.in/</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform  duration-300' />
            <div >
              <h1 className='text-lg text-white'>Villa with amazing view</h1>
              <p className='text-slate-400'>₹ 1.19 Cr</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop8} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform  duration-300' />
            <div >
              <h1 className='text-lg text-white'>Sea view villa</h1>
              <p className='text-slate-400'>₹ 1.28 Cr</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top button  */}
      <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6 text-white' />
        </Link>
      </div>

      {/* dark mode toggle button section  */}

      <div>
        <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {darkMode ? <FaMoon size={25} className='text-black' /> : <FaSun size={25} className='text-black' />}
        </button>
      </div>
    </>
  )
}

export default Footer