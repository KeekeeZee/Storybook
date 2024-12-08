import React from "react";
import PageContent from "./PageContent";
import CardGrid from "./CardGrid";

const HomePage = () => {
  const cardData = [
    {
      title: "Tableau blanc",
      description: "Libérez votre créativité en esquissant vos idées.",
      image: "https://via.placeholder.com/150",
      buttonLabel: "Créer",
      buttonIcon: "circle-plus",
      buttonTheme: "secondary",
      onClick: () => console.log("Créer un tableau blanc"),
    },
    {
      title: "Équipes",
      description: "Collaborez avec vos équipes pour de meilleurs résultats.",
      image: "https://via.placeholder.com/150",
      buttonLabel: "Gérer",
      buttonIcon: "faUserFriends",
      buttonTheme: "secondary",
      onClick: () => console.log("Gérer les équipes"),
    },
    {
      title: "Bibliothèque",
      description: "Accédez à des ressources et des documents partagés.",
      image: "https://via.placeholder.com/150",
      buttonLabel: "Explorer",
      buttonIcon: "faBookOpen",
      buttonTheme: "secondary",
      onClick: () => console.log("Explorer la bibliothèque"),
    },
    {
      title: "Paramètres",
      description: "Personnalisez votre expérience et gérez vos paramètres.",
      image: "https://via.placeholder.com/150",
      buttonLabel: "Configurer",
      buttonIcon: "faCog",
      buttonTheme: "secondary",
      onClick: () => console.log("Configurer les paramètres"),
    },
    {
      title: "Paramètres",
      description: "Personnalisez votre expérience et gérez vos paramètres.",
      image: "https://via.placeholder.com/150",
      buttonLabel: "Configurer",
      buttonIcon: "faCog",
      buttonTheme: "secondary",
      onClick: () => console.log("Configurer les paramètres"),
    },
  ];

  return (
    <PageContent>
      {/* Titre principal */}
      <section className="mb-6">
        <h2 className="text-heading-2 tracking-tight">Bienvenue sur Beink</h2>
        <p className="text-gray-600 mt-2">Explorez vos idées en quelques clics</p>
      </section>

      {/* Grille de cartes */}
      <section>
        <CardGrid cards={cardData} columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" gap="gap-6" />
      </section>
    </PageContent>
  );
};

export default HomePage;