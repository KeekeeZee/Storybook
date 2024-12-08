import React from "react";
import PageContent from "./PageContent";
import Card from "./Card"; // Assurez-vous d'avoir créé le composant Card

const HomePage = () => {
  return (
    <PageContent>
      {/* Titre principal */}
      <section className="mb-6">
        <h2 className="text-heading-2 tracking-tight">Bienvenue sur Beink</h2>
        <p className="text-gray-600 mt-2">
          Explorez vos idées en quelques clics
        </p>
      </section>

      {/* Grille de cartes */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Tableau blanc"
          description="Libérez votre créativité en esquissant vos idées."
          image="https://via.placeholder.com/150"
          buttonLabel="Créer"
          buttonIcon="circle-plus"
          buttonTheme="secondary"
          onClick={() => console.log("Créer un tableau blanc")}
        />
        <Card
          title="Équipes"
          description="Collaborez avec vos équipes pour de meilleurs résultats."
          image="https://via.placeholder.com/150"
          buttonLabel="Gérer"
          buttonIcon="faUserFriends"
          buttonTheme="secondary"
          onClick={() => console.log("Gérer les équipes")}
        />
        <Card
          title="Bibliothèque"
          description="Accédez à des ressources et des documents partagés."
          image="https://via.placeholder.com/150"
          buttonLabel="Explorer"
          buttonIcon="faBookOpen"
          buttonTheme="secondary"
          onClick={() => console.log("Explorer la bibliothèque")}
        />
        <Card
          title="Paramètres"
          description="Personnalisez votre expérience et gérez vos paramètres."
          image="https://via.placeholder.com/150"
          buttonLabel="Configurer"
          buttonIcon="faCog"
          buttonTheme="secondary"
          onClick={() => console.log("Configurer les paramètres")}
        />
      </section>
    </PageContent>
  );
};

export default HomePage;
