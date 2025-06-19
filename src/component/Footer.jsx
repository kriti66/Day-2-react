import React from 'react';

function Footer() {
  return (
    <footer className="bg-orange-600 text-white text-center py-4 ">
     <div className='text-center display'>
      <p className='text-sm'> 
        @copy; {new Date().getFullYear()} My Webiste. All rights reserved.</p> 
  
      </div>
      </footer>
  );
}

export default Footer; 