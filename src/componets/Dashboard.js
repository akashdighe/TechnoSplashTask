// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectMenu } from '../action/actions';

const Dashboard = () => {
  const selectedMenu = useSelector(state => state.selectedMenu);
  const data = useSelector(state => {
    switch (selectedMenu) {
      case 'Food':
        return state.foodData;
      case 'Places':
        return state.placesData;
      case 'States':
        return state.statesData;
      default:
        return [];
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to select the initial menu as 'Food'
    dispatch(selectMenu('Food'));
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h2>{selectedMenu} Dashboard</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
