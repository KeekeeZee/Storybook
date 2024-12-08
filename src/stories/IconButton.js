import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'; // Importe toutes les icônes

const IconButton = ({
  theme = 'primary',
  size = 'M',
  icon = 'faCheck', // Nom de l'icône comme chaîne
  tooltip = '', // Texte du tooltip
  rounded = false,
  disabled = false,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  const [state, setState] = useState('default');

  // Classes pour les tailles
  const sizeClasses = {
    XS: `h-6 w-6 text-xs ${rounded ? 'rounded-full' : 'rounded-[6px]'}`,
    S: `h-8 w-8 text-sm ${rounded ? 'rounded-full' : 'rounded-[8px]'}`,
    M: `h-10 w-10 text-base ${rounded ? 'rounded-full' : 'rounded-[12px]'}`,
    L: `h-12 w-12 text-lg ${rounded ? 'rounded-full' : 'rounded-[16px]'}`,
  };

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

  const getIcon = (iconName) => {
    const icon = Icons[iconName];
    return icon ? <FontAwesomeIcon icon={icon} className={iconClass} /> : null;
  };

  return (
    <div className="relative group">
      {/* Tooltip */}
      {tooltip && (
        <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {tooltip}
        </div>
      )}
      <button
        className={`flex justify-center items-center ${sizeClass} ${themeClass}`}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {icon && getIcon(icon)}
      </button>
    </div>
  );
};

export default IconButton;
