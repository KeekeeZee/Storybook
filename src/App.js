import React from 'react';
import Layout from './stories/Layout';
import HomePage from './stories/HomePage';

const App = () => {
  return (
    <Layout
      variant="desktop" // ou "mobile" selon la version
      header={<div>Header Content</div>}
    >
      <HomePage />
    </Layout>
  );
};

export default App;
