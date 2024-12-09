import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'; // Importe toutes les icônes

const SimpleButton = ({
  theme = 'primary',
  size = 'M',
  label = 'Label',
  leftIcon = 'faCheck', // Nom de l'icône comme chaîne
  rightIcon = null,
  showLeftIcon = true, // Booléen pour afficher ou non l'icône de gauche
  showRightIcon = true, // Booléen pour afficher ou non l'icône de droite
  rounded = false, // Booléen pour définir un bouton arrondi
  disabled = false,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  const [state, setState] = useState('default'); // État local du bouton

  // Classes pour les tailles
  const sizeClasses = {
    XS: `h-6 px-1 gap-1 text-xs ${rounded ? 'rounded-full' : 'rounded-[6px]'}`,
    S: `h-8 px-2 gap-2 text-sm ${rounded ? 'rounded-full' : 'rounded-[8px]'}`,
    M: `h-10 px-3 gap-3 text-base ${rounded ? 'rounded-full' : 'rounded-[12px]'}`,
    L: `h-12 px-4 gap-4 text-lg ${rounded ? 'rounded-full' : 'rounded-[16px]'}`,
  };

  const iconSizes = {
    XS: 'text-xs', // Classe Tailwind pour petite taille
    S: 'text-sm',
    M: 'text-base',
    L: 'text-lg',
  };

  // Gestion dynamique des classes par thème et état
  const themeStyles = {
    primary: {
      default: 'bg-primary-500 text-grey-50',
      hover: 'hover:bg-primary-600',
      active: 'active:bg-primary-700',
      disabled: 'bg-grey-200 text-grey-500 cursor-not-allowed',
    },
    secondary: {
      default: 'bg-grey-200 text-grey-800',
      hover: 'hover:bg-grey-300',
      active: 'active:bg-grey-300',
      disabled: 'bg-grey-200 text-grey-500 cursor-not-allowed',
    },
    ghost: {
      default: 'bg-transparent text-grey-800 border border-grey-300',
      hover: 'hover:bg-grey-50 hover:border-grey-400',
      active: 'active:bg-grey-100 active:border-grey-500',
      disabled: 'bg-transparent text-grey-500 border-grey-300 cursor-not-allowed',
    },
    transparent: {
      default: 'bg-transparent text-grey-800',
      hover: 'hover:bg-grey-100',
      active: 'active:bg-grey-200',
      disabled: 'bg-transparent text-grey-500 cursor-not-allowed',
    },
  };

  const sizeClass = sizeClasses[size] || sizeClasses['M'];
  const themeClass = themeStyles[theme]?.[disabled ? 'disabled' : state] || themeStyles[theme]?.['default'];
  const iconClass = iconSizes[size] || iconSizes['M']; // Classe pour la taille des icônes

  // Gestion des événements pour changer dynamiquement l'état
  const handleMouseEnter = (e) => {
    if (!disabled) {
      setState('hover');
      onMouseEnter(e); // Appelle la fonction passée en prop
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      setState('default');
      onMouseLeave(e); // Appelle la fonction passée en prop
    }
  };

  const handleClick = (e) => {
    if (!disabled) {
      setState('active');
      onClick(e); // Appelle la fonction passée en prop
    }
  };

  // Fonction pour récupérer l'icône par son nom
  const getIcon = (iconName) => {
    const icon = Icons[iconName]; // Recherche l'icône dans les icônes importées
    return icon ? <FontAwesomeIcon icon={icon} className={iconClass} /> : null;
  };

  return (
    <button
      className={`flex justify-center items-center font-sans font-medium ${sizeClass} ${themeClass}`}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {showLeftIcon && leftIcon && (
        <span className="">
          {getIcon(leftIcon)}
        </span>
      )}
      <span>{label}</span>
      {showRightIcon && rightIcon && (
        <span className="">
          {getIcon(rightIcon)}
        </span>
      )}
    </button>
  );
};

export default SimpleButton;
