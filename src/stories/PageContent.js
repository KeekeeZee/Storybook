import React from 'react';

const PageContent = ({ children }) => {
  return (
    <div className="p-4 bg-grey-200">
      {children}
    </div>
  );
};

export default PageContent;
