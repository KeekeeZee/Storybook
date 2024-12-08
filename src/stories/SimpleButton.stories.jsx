import React from 'react';
import SimpleButton from './SimpleButton';

export default {
  title: 'Buttons/SimpleButton',
  component: SimpleButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['XS', 'S', 'M', 'L'], // Options pour les tailles
      description: 'Taille du bouton.',
    },
    leftIcon: {
      control: { type: 'select' },
      options: [
        'faCheck', 
        'faTimes', 
        'faUser', 
        'faArrowRight', 
        'faArrowLeft', 
        'faStar', 
        'faBell', 
        'faHeart', 
        'faHome', 
        'faSearch', 
        'faTrash',
        'faCirclePlus', 
        null,
      ],
      description: 'Icône affichée à gauche du texte.',
    },
    rightIcon: {
      control: { type: 'select' },
      options: [
        'faCheck', 
        'faTimes', 
        'faUser', 
        'faArrowRight', 
        'faArrowLeft', 
        'faStar', 
        'faBell', 
        'faHeart', 
        'faHome', 
        'faSearch', 
        'faTrash',
        'faCirclePlus', 
        null,
      ],
      description: 'Icône affichée à droite du texte.',
    },
    label: {
      control: { type: 'text' },
      description: 'Texte affiché à l’intérieur du bouton.',
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'transparent'], // Options pour les thèmes
      description: 'Thème visuel du bouton.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Désactive le bouton.',
    },
    showLeftIcon: {
      control: { type: 'boolean' },
      description: 'Affiche ou masque l’icône de gauche.',
    },
    showRightIcon: {
      control: { type: 'boolean' },
      description: 'Affiche ou masque l’icône de droite.',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Affiche ou masque le label.',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Rend le bouton complètement arrondi.',
    },
  },
};

const Template = (args) => <SimpleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'M',
  label: 'Label',
  leftIcon: 'faUser', // Nom de l'icône à gauche
  rightIcon: 'faCheck', // Nom de l'icône à droite
  showLeftIcon: true,
  showRightIcon: true,
  showLabel: true,
  theme: 'primary',
  rounded: false, // Par défaut, le bouton n’est pas complètement arrondi
  disabled: false,
};
