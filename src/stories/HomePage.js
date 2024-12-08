import React from 'react';
import PageContent from './PageContent';

const HomePage = () => {
  return (
    <PageContent>
      {/* Titre principal */}
      <section className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Bienvenue sur votre tableau de bord</h1>
        <p className="text-gray-600 mt-2">Voici un aperçu de vos activités et actions récentes.</p>
      </section>

      
    </PageContent>
  );
};

export default HomePage;
