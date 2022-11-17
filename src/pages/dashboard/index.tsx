import React from 'react';
import './index.css';
const DashBoard = () =>{

  return (
    <div className="dashboard-container">
    
      <div className="sidebar-left-container"></div>
      <div className="dashboard">
        <h1>DASHBOARD</h1>
        <div className="display-container">
            <div className="maximum-power-generated-container display"></div>
            <div className="current-power-container display"></div>
            <div className="total-power-generated-container display"></div>
        </div>
        <div className="chart-container">
            <div className="power-genereted-per-month-container chart"></div>
            <div className="consumed-energy-container chart"></div>
        </div>
        <div className="graphics-elements-container"></div>
      </div>
      <div className="sidebar-right-container"></div>
    </div>
  );
}

export default DashBoard;
