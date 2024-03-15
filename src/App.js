// src/App.js
import React from 'react';
import Header from './componets/Header';
import Sidebar from './componets/Sidebar';
import Dashboard from './componets/Dashboard';
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
