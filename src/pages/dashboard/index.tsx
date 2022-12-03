import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, Filler } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import './index.css';
import Logo from '../../assets/img/logo.svg';
import Sun from '../../assets/icon/sun.svg';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const labels : string[] = ['jan', 'feb', 'Mar', 'Apr', 'May', 'Yun', 'Yul', 'Aug', 'Sep', 'Oc', 'Nov', 'Dec']

const Test :Number[] = [300, 200, 160, 210, 50, 200];
const NumberRandomGenerator = () =>{
  let operation:any = Math.floor(100* Math.random());
  return operation;
}

export const LineOptions = {
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
        text: 'Senconds in ( s )'
      },
    },
    y: {
      title: {
        display: true,
        text: 'potency in ( W )'
      }
    }
  },
  elements: {
    point:{
      radius: 0
    }
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  }
};

export const BarOptions = {
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
}
const DashBoard = () =>{
  const chartValue = useRef();
  const dataBar : any = {
    labels,
    datasets: [{
      data: Test,
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

  const dataLine = {
    labels: labels,
    datasets: [{
      label: "Dataset 1",
      data: [2, 3, 1, 6, 5],
      borderColor: "#F97F2A",
      backgroundColor: (context:any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#F97F2A");
        gradient.addColorStop(1, "rgba(253, 179, 30, 0)");
        return gradient;
      },
      tension: .4,
      fill: true
    }],
  };
  useEffect(()=>{
    let values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let currentValue:any = chartValue.current;
    setInterval(()=>{
      values.splice(0, 1);
      values.push(NumberRandomGenerator());
      currentValue.data.datasets[0].data=values;
      console.log(values);
      currentValue.update();
    }, 400);
  }, [])
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
              <Bar className="bar" data={dataBar} options={BarOptions} ></Bar>
            </div>
          </div>
          <div className="consumed-energy-container inner-chart">
            <p className="title">Consumed energy</p>
           <Line data={dataLine} options={LineOptions} ref={chartValue}></Line>
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
