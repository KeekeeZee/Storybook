import React from 'react';

const PageContent = ({ children }) => {
  return (
    <main className="flex-1 p-4 overflow-y-auto">
      {children}
    </main>
  );
};

export default PageContent;
