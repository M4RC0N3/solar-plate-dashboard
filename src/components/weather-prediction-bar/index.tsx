import { useState, useEffect } from 'react';
import Sun from '../../assets/icon/sun.svg';
import './index.css';
import {WEATHER_API_KEY, WEATHER_API_URL} from '../../services/api';
export const WeatherPredicitonBar = ()=>{
    const [latitude, setLatitude] = useState(Number);
    const [longitude, setLongitude] = useState(Number);
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
            let latitude:number = position.coords.latitude;
            let longitude: number = position.coords.longitude
            setLatitude(latitude);
            setLongitude(longitude);
        },err=>{
            console.log(err);
            alert('Não foi possível pegar a localização')
        });
    }
    else{
        alert('n foi possível')
    }
    useEffect(()=>{
        console.log(longitude, latitude);
        const currentWeather =  fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`);
        const forecastFetch =  fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`);
        Promise.all([currentWeather, forecastFetch])
        .then(async(response)=>{
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();
            console.log(weatherResponse);
            console.log('=================');
            console.log(forecastResponse);
        })
    })
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