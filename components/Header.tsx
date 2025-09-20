
import React from 'react';
import { LungsIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-emerald text-brand-off-white shadow-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-center">
        <LungsIcon className="w-8 h-8 mr-3 text-brand-light-green" />
        <h1 className="text-2xl md:text-3xl font-syne font-bold tracking-wide">
          Digital Breathwork
        </h1>
      </div>
    </header>
  );
};

export default Header;
