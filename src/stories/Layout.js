import React from 'react';

const Layout = ({ header, sidebar, content }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {sidebar}
      <div className="flex-1 flex flex-col">
        {header}
        {content}
      </div>
    </div>
  );
};

export default Layout;
