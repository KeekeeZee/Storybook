import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ variant = 'desktop', header, children }) => {
  return (
    <div className={`flex ${variant === 'mobile' ? 'flex-col' : 'flex-row'} h-screen bg-gray-100`}>
      {/* Sidebar */}
      <Sidebar variant={variant} />

      {/* Main Content */}
      <div className={`py-3 px-2 flex-1 flex flex-col ${variant === 'mobile' ? 'mt-auto' : ''}`}>
        {header && (
          <header className="">
            
          </header>
        )}
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
