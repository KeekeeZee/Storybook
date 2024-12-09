import React from 'react';
import SimpleButton from './SimpleButton';

export default {
  title: 'Buttons/SimpleButton',
  component: SimpleButton,
  tags: ['autodocs'], // Optionnel, pour la documentation automatique
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['XS', 'S', 'M', 'L'],
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
      options: ['primary', 'secondary', 'ghost', 'transparent'],
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

export const Default = {
  args: {
    size: 'M',
    label: 'Label',
    leftIcon: 'faUser',
    rightIcon: 'faCheck',
    showLeftIcon: true,
    showRightIcon: true,
    showLabel: true,
    theme: 'primary',
    rounded: false,
    disabled: false,
  },
};

export const CreateNew = {
  args: {
    size: "L",
    label: "Créer",
    leftIcon: "faCirclePlus",
    rightIcon: null,
    showLeftIcon: true,
    showRightIcon: true,
    showLabel: true,
    theme: "primary",
    rounded: true,
    disabled: false
  }
};