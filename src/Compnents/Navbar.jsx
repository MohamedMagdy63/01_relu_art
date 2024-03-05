import React from 'react'
import {Link} from 'react-router-dom';
import Relu from '../Data/Logo/Relu.png';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-100 p-1">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to='/' className="flex items-center">
            <img src={Relu} alt="Relu Logo" width={64} height={64} />
            <span className="text-white ml-2 text-lg font-semibold">ReLU Art</span>
          </Link>
          <div className='flex items-center justify-center p-1'>
            <p className='text-gray-800 italic font-semibold'>Your Art , Our Frame</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
