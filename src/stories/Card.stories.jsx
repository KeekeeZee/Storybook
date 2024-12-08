import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Titre principal de la carte',
    },
    description: {
      control: { type: 'text' },
      description: 'Texte descriptif de la carte',
    },
    image: {
      control: { type: 'text' },
      description: "URL de l'image affichée en haut",
    },
    buttonLabel: {
      control: { type: 'text' },
      description: 'Label du bouton',
    },
    buttonIcon: {
      control: { type: 'select' },
      options: [
        'circle-plus', 
        'faCheck', 
        'faUserFriends', 
        'faBookOpen', 
        'faCog', 
        null
      ], // Ajoutez d'autres icônes si nécessaire
      description: 'Icône affichée dans le bouton',
    },
    buttonTheme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'transparent'],
      description: 'Thème visuel du bouton',
    },
    onClick: {
      action: 'clicked',
      description: 'Fonction déclenchée au clic sur le bouton',
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Tableau blanc',
  description: 'Libérez votre créativité en esquissant vos idées.',
  image: 'https://via.placeholder.com/150', // Exemple d'image
  buttonLabel: 'Créer',
  buttonIcon: 'circle-plus',
  buttonTheme: 'secondary',
};