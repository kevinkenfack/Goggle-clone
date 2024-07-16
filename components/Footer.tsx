import { LocationMarkerIcon } from '@heroicons/react/outline';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <span>
        <LocationMarkerIcon /> Français | Englais <a href="#"></a>
        <a href="#">español</a>
        <a href="#">italien</a>
        <a href="#">plus...</a>
      </span>
      <span className="fright">
        <a href="https://www.kevinkenfack.com" target='_blank'>Powered by Kevin Kenfack</a>
        <a href="#">Confidentialite</a>
        <a href="#">A propos</a>
      </span>
    </footer>
  );
};

export default Footer;
