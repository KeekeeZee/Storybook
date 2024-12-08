import React from 'react';
import IconButton from './IconButton';

const Sidebar = ({ variant = 'desktop' }) => {
  const isMobile = variant === 'mobile';

  return (
    <aside
      className={`${
        isMobile ? 'flex-row w-full justify-evenly h-16' : 'flex-col w-20 h-screen'
      } flex bg-gray-50 py-4 ${
        isMobile ? '' : ''
      }`}
    >
      {/* Section principale */}
      <div
        className={`${
          isMobile ? 'flex justify-evenly items-center w-full' : 'flex flex-col items-center space-y-4'
        }`}
      >
        <IconButton icon="faPlus" theme="primary" tooltip="Créer" rounded size={isMobile ? 'M' : 'L'} />
        <IconButton icon="faHome" theme="secondary" tooltip="Ma Page" rounded size={isMobile ? 'M' : 'L'} />
        <IconButton icon="faChalkboard" theme="transparent" tooltip="Mes tableaux" rounded size={isMobile ? 'M' : 'L'} />
        <IconButton icon="faUserFriends" theme="transparent" tooltip="Mon équipe" rounded size={isMobile ? 'M' : 'L'} />
        <IconButton icon="faBookOpen" theme="transparent" tooltip="Bibliothèque" rounded size={isMobile ? 'M' : 'L'} />
      </div>

      {/* Section des paramètres */}
      <div
        className={`${
          isMobile ? 'hidden' : 'flex flex-col items-center space-y-4 mt-auto'
        }`}
      >
        <IconButton icon="faCog" theme="transparent" tooltip="Paramètres" rounded size="M" />
        <IconButton icon="faUser" theme="ghost" tooltip="Profil" rounded size="L" />
      </div>
    </aside>
  );
};

export default Sidebar;
