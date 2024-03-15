// src/components/Sidebar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMenu } from '../action/actions';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleClick = (menu) => {
    dispatch(selectMenu(menu));
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleClick('Food')}>Food</li>
        <li onClick={() => handleClick('Places')}>Places</li>
        <li onClick={() => handleClick('States')}>States</li>
      </ul>
    </div>
  );
}

export default Sidebar;
