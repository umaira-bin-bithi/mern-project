import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-6'>

        {/* Omega Name with Omega Symbol */}
        <div className='flex justify-center items-center gap-2 mb-2 text-2xl font-bold text-gray-800'>
          <span className='text-green-600 text-3xl' title="Omega Logo">Ω</span>
          Omega
        </div>

        {/* Tagline */}
        <p className='text-center text-gray-600 mb-4'>
          Your one-stop shop for electronics, fashion, and lifestyle products.
        </p>

        {/* Social Media Icons */}
        <div className='flex justify-center gap-4 mb-4 text-gray-600'>
          <a href="#" className='hover:text-blue-600 transition'><FaFacebookF size={20} /></a>
          <a href="#" className='hover:text-blue-400 transition'><FaTwitter size={20} /></a>
          <a href="#" className='hover:text-pink-500 transition'><FaInstagram size={20} /></a>
          <a href="#" className='hover:text-blue-700 transition'><FaLinkedinIn size={20} /></a>
        </div>

        {/* Bottom */}
        <p className='text-center text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} Omega. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer;
