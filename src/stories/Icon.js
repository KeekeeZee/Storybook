import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon, size }) => {
  return <FontAwesomeIcon icon={icon} />;
};

export default Icon;