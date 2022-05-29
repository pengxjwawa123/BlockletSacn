import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center m-auto px-2 max-w-screen-lg h-16 ">
        <div className="text-xl tracking-wider font-bold italic whitespace-nowrap">BlockletScan</div>
        <div className="text-xl tracking-wider font-bold italic whitespace-nowrap">NFT</div>
        <div>
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>
      </header>
      <hr className="text-black" />
    </div>
  );
};

export default Header;
