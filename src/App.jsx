import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Header from './component/Header';
import Avatar from './component/Avatar';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      {/* Content that expands to fill space */}
      <div  className="h-20" style={{ flex: 1 }}  >
        <Header />
      </div>
   <Avatar/>
      <Footer />
    </div>
  );
};

export default App;
