import React from 'react';
import './index.css';
import Logo from '../../assets/img/logo.svg';
import Sun from '../../assets/icon/sun.svg';
const DashBoard = () =>{

  return (
    <div className="dashboard-container">
      <div className="sidebar-left-container">
        <img src={Logo} alt="Logo" width={44} height={44} draggable={false}/>
      </div>
      <div className="dashboard">
        <h1>DASHBOARD</h1>
        <div className="display-container">
          <div className="maximum-power-generated-container display">
              <p className="title">Maximum power generated</p>
              <p className="power">200 W</p>
          </div>
          <div className="current-power-container display">
              <p className="title">Maximum power generated</p>
              <p className="power">20 W</p>
          </div>
          <div className="total-power-generated-container display">
              <p className="title">Total power genereted</p>
              <p className="power">1000 W</p>
          </div>
        </div>
        <div className="chart-container">
            <div className="power-genereted-per-month-container chart">
              <p className="title">Power genereted per month</p>
            </div>
            <div className="consumed-energy-container chart">
              <p className="title">Consumed energy</p>
            </div>
        </div>
        <div className="graphics-elements-container">
          <div className="solar-plate-view-container view"></div>
          <div className="equipments-conected-container view"></div>
        </div>
      </div>
      <div className="sidebar-right-container">
        <div></div>
        <div className="current-temperature-container">
          <div className="weather-local-container">
            <p className="weather">Sun</p>
            <p className="local">Salvador, BA</p>
          </div>
          <div className="temperature-container">
            <p>24 °C</p>
          </div>
        </div>
        <div className="sun-position-container">
          <div className="sun-path-container">
            <div className="sun-path">
              <img className="sun" src={Sun} alt="Sun icon" width={26} height={26} draggable={false}/>
            </div>
            <div className="base"></div>
          </div>
          <div className="subtitle-container">
            <div className="sunrise-container">
              <p>sunrise</p>
              <p>06:00 am</p>
            </div>
            <div className="sunset-container">
              <p>sunset</p>
              <p>06:00 pm</p>
            </div>
          </div>
        </div>
        <div className="weather-prediction-container">
          <p className="title">Weather Prediction</p>
          <div className="card">
            <div className="icon-container"></div>
            <div className="weather-date">
              <p>Novemver 3</p>
              <p>Cloudy</p>
            </div>
            <div className="average-temperature-container">
              <p>28°C / 24°C</p>
            </div>
          </div>
          <div className="card">
            <div className="icon-container"></div>
            <div className="weather-date">
              <p>Novemver 4</p>
              <p>Sun</p>
            </div>
            <div className="average-temperature-container">
              <p>28°C / 24°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
