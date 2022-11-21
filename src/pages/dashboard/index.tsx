import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './index.css';
import Logo from '../../assets/img/logo.svg';
import Sun from '../../assets/icon/sun.svg';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels : string[] = ['jan', 'feb', 'Mar', 'Apr', 'May', 'Yun', 'Yul', 'Aug', 'Sep', 'Oc', 'Nov', 'Dec']



const DashBoard = () =>{
  const data : any = {
    labels,
    datasets: [{
      data: [300, 200, 160, 210, 50, 200, 260, 40, 200, 300, 100, 50],
      borderRadius: 6,
      borderSkipped: false,
      backgroundColor: (context:any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#F97F2A");
        gradient.addColorStop(1, "#FDB31E");
        return gradient;
      },
    }],
  }

  const [chartOption, setChartOption] = useState({
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
    },
    scales: {
      // to remove the labels
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'potency in ( W )'
        }
      }
    },
  });

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
          <div className="power-genereted-per-month-container inner-chart">
            <p className="title">Power genereted per month</p>
            <div className="chart">
              <Bar className="bar" data={data} options={chartOption}></Bar>
            </div>
          </div>
          <div className="consumed-energy-container inner-chart">
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
