import React from "react";

const Header = () => {
  return (
    <header className="bg-orange-600 p-4 flex justify-between items-center">
      {/* Site name or logo */}
      <div className="text-white text-2xl font-bold">MyStore</div>

      {/* Search section */}
      <div className="flex bg-white rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for products"
          className="px-4 py-2 w-96 text-gray-800 text-base outline-none"
        />
        <button className="bg-orange-100 px-4 py-2 text-orange-600 font-semibold">
          Search
        </button>
      </div>

      {/* Login and cart section */}
      <div className="flex items-center gap-4">
        <button className="text-white font-medium hover:underline">
          Login
        </button>
        <button className="text-white font-medium hover:underline">
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
