import Sun from '../../assets/icon/sun.svg';
import './index.css';
export const WeatherPredicitonBar = ()=>{
    return(
        <div className="sidebar-right-container">
            <div></div>
            <div className="weather-container">
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
    )
}