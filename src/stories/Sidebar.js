import React from 'react';
import IconButton from './IconButton'; // Importation du composant IconButton
import { 
  faArrowRight, 
  faHome, 
  faPlus, 
  faDesktop, 
  faUserFriends, 
  faBook, 
  faCog 
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center justify-between w-20 bg-gray-50 py-4 space-y-4">

      {/* Navigation Items */}
      <div className="flex flex-col items-center space-y-2">
                {/* Ajouter */}
                <IconButton icon="faPlus" theme="primary" rounded size="L" />
        {/* Accueil */}
        <IconButton icon="faHome" theme="secondary" rounded size="L" />
        {/* Desktop */}
        <IconButton icon="faChalkboard" theme="transparent" rounded size="L" />
        {/* User */}
        <IconButton icon="faUserFriends" theme="transparent" rounded size="L" />
        {/* Documentation */}
        <IconButton icon="faBookOpen" theme="transparent" rounded size="L" />
      </div>

      {/* Footer Items */}
      <div className="flex flex-col items-center space-y-2 mt-auto">
        {/* Paramètres */}
        <IconButton icon="faCog" theme="ghost" rounded size="M" />
        {/* Avatar (initiale) */}
        <div className="flex items-center justify-center h-10 w-10 bg-gray-100 text-gray-700 font-semibold text-lg rounded-full">
          J
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
