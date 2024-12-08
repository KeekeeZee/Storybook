import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'; // Importe toutes les icônes

const IconButton = ({
  theme = 'primary',
  size = 'M',
  icon = 'faCheck', // Nom de l'icône comme chaîne
  rounded = false, // Booléen pour rendre le bouton complètement arrondi
  disabled = false,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  const [state, setState] = useState('default'); // État local du bouton

  // Classes pour les tailles
  const sizeClasses = {
    XS: `h-6 w-6 text-xs ${rounded ? 'rounded-full' : 'rounded-[6px]'}`,
    S: `h-8 w-8 text-sm ${rounded ? 'rounded-full' : 'rounded-[8px]'}`,
    M: `h-10 w-10 text-base ${rounded ? 'rounded-full' : 'rounded-[12px]'}`,
    L: `h-12 w-12 text-lg ${rounded ? 'rounded-full' : 'rounded-[16px]'}`,
  };

  // Classes pour les tailles des icônes
  const iconSizes = {
    XS: 'text-xs',
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
  const iconClass = iconSizes[size] || iconSizes['M'];

  // Gestion des événements pour changer dynamiquement l'état
  const handleMouseEnter = (e) => {
    if (!disabled) {
      setState('hover');
      onMouseEnter(e);
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      setState('default');
      onMouseLeave(e);
    }
  };

  const handleClick = (e) => {
    if (!disabled) {
      setState('active');
      onClick(e);
    }
  };

  // Fonction pour récupérer l'icône par son nom
  const getIcon = (iconName) => {
    const icon = Icons[iconName]; // Recherche l'icône dans les icônes importées
    return icon ? <FontAwesomeIcon icon={icon} className={iconClass} /> : null;
  };

  return (
    <button
      className={`flex justify-center items-center ${sizeClass} ${themeClass}`}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {icon && getIcon(icon)}
    </button>
  );
};

export default IconButton;
