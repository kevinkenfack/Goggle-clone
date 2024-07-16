import {
  AdjustmentsIcon,
  ChatAltIcon,
  ClockIcon,
  CollectionIcon,
  EyeOffIcon,
  HomeIcon,
  InformationCircleIcon,
  StatusOfflineIcon,
  UserGroupIcon,
  XIcon
} from '@heroicons/react/outline';
import React, { forwardRef, useEffect, useRef } from 'react';

const Sidebar = forwardRef((props, ref) => {
  const sidebarList = useRef(null);

  // @ts-ignore
  const closeSidebar = () => ref.current.classList.remove('open');

  useEffect(() => {
    const sidebarToggle = document.querySelector('.sidebarToggle');

    const hideSidebar = (e) => {
      if (sidebarList.current.contains(e.target) || sidebarToggle.contains(e.target)) {
        return;
      }
      // @ts-ignore
      ref.current.classList.remove('open');
    };
    window.addEventListener('click', hideSidebar);
    return () => window.removeEventListener('click', hideSidebar);
  }, []);

  return (
    // @ts-ignore
    <div className="sidebar" ref={ref}>
      <ul ref={sidebarList}>
        <li className="ilogo">
          <img src="/google.png" alt="google logo" />
          <button className="icon closeSidebar" onClick={closeSidebar}>
            <XIcon />
          </button>
        </li>
        <li>
          <HomeIcon /> Accueil
        </li>
        <li>
          <ClockIcon /> Historique de recherche
        </li>
        <li>
          <CollectionIcon /> Collections
        </li>
        <li>
          <StatusOfflineIcon /> Recherche hors ligne
        </li>
        <hr />
        <li>
          <AdjustmentsIcon /> Parametres
        </li>
        <li>
          <UserGroupIcon /> Données et confidentialité
        </li>
        <li>
          <EyeOffIcon /> Cacher les résultats explicites
        </li>
        <li>
          <InformationCircleIcon /> Aide et support
        </li>
        <li>
          <ChatAltIcon /> Envoyer un feedback
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
