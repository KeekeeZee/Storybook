import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon, size = 'S' }) => {
  const sizes = {
    XS: 'text-xs',
    S: 'text-sm',
    M: 'text-base',
    L: 'text-lg',
  };

  const iconSize = sizes[size] || sizes['S'];

  return <FontAwesomeIcon icon={icon} className={iconSize} />;
};

export default Icon;
