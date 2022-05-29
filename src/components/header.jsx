import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center m-auto px-2 max-w-screen-lg h-16 ">
        <div className="text-xl tracking-wider font-bold italic whitespace-nowrap">
          <Link to="/" className="text-black">
            BlockletScan
          </Link>
        </div>
        <div className="text-xl tracking-wider font-bold italic whitespace-nowrap">
          <Link to="/social" className="text-black">
            NFT Social
          </Link>
        </div>
        <div>
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>
      </header>
      <hr className="text-black" />
    </div>
  );
};

export default Header;
