import React from 'react';
import IconButton from './IconButton';
import { 
  faCheck, 
  faTimes, 
  faUser, 
  faArrowRight, 
  faArrowLeft, 
  faStar, 
  faBell, 
  faHeart, 
  faHome, 
  faSearch, 
  faTrash 
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['XS', 'S', 'M', 'L'],
      description: 'Taille du bouton.',
    },
    icon: {
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
      ],
      description: 'Icône affichée dans le bouton.',
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'transparent'],
      description: 'Thème visuel du bouton.',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Rend le bouton complètement arrondi.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Désactive le bouton.',
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'M',
  icon: 'faCheck', // Nom de l'icône à afficher
  theme: 'primary',
  rounded: false, // Par défaut, le bouton n'est pas complètement arrondi
  disabled: false,
};
