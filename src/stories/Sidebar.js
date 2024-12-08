import React from 'react';
import IconButton from './IconButton';

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center w-20 bg-gray-50 py-4 space-y-4">
        <div>
      <IconButton icon="faPlus" theme="primary" tooltip="Créer" rounded size="L" />
      <IconButton icon="faHome" theme="secondary" tooltip="Ma Page" rounded size="L" />
      <IconButton icon="faChalkboard" theme="transparent" tooltip="Mes tableaux" rounded size="L" />
      <IconButton icon="faUserFriends" theme="transparent" tooltip="Mon équipe" rounded size="L" />
      <IconButton icon="faBookOpen" theme="transparent" tooltip="Bibliothèque" rounded size="L" />
      </div>
      <div>
      <IconButton icon="faCog" theme="transparent" tooltip="Settings" rounded size="M" />
      <IconButton icon="faUser" theme="ghost" tooltip="Settings" rounded size="L" />
      </div>
    </aside>
  );
};

export default Sidebar;
