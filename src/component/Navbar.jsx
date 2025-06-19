import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600 tracking-wide">Daraz</div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-orange-600 transition cursor-pointer">Home</li>
          <li className="hover:text-orange-600 transition cursor-pointer">About</li>
          <li className="hover:text-orange-600 transition cursor-pointer">Service</li>
          <li className="hover:text-orange-600 transition cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
