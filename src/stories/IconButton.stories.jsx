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
  title: 'Components/IconButton',
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
        null,
      ],
      description: 'Icône affichée dans le bouton.',
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'transparent'],
      description: 'Thème visuel du bouton.',
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
  disabled: false,
};
