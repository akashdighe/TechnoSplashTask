// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const selectedMenu = useSelector(state => state.selectedMenu);

  return (
    <div className="header">
      <h1>{selectedMenu}</h1>
    </div>
  );
}

export default Header;
