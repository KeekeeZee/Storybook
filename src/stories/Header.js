import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 shadow-sm">
      {children}
    </header>
  );
};

export default Header;
