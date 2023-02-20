import { useState, useEffect } from 'react';
import axios from 'axios';
import Sun from '../../assets/icon/sun.svg';
import './index.css';
import {WEATHER_API_KEY, WEATHER_API_URL} from '../../services/api';

export const WeatherPredicitonBar = ()=>{
    const [latitude, setLatitude] = useState(Number);
    const [longitude, setLongitude] = useState(Number);
    const [weather, setWeather] = useState(Object);
    const [forecast, setForecast] = useState(Object);
    const [lastOccurrenceWeather , setLastOccurrenceWeather] = useState(Object);
    const [celsiusTemperature, setCelsiusTemperature] =useState(String);

    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
            let latitude:number = position.coords.latitude;
            let longitude: number = position.coords.longitude
            setLatitude(latitude);
            setLongitude(longitude);
        },err=>{
            console.log(err);
            alert('Unable to get location')
        });
    }
    const getWeather = async(): Promise<any> => {
        const currentWeather =  axios.get(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`);
        const forecastFetch =  axios.get(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`);
        Promise.all([currentWeather, forecastFetch])
        .then(async(response)=>{
            const weatherResponse = await response[0].data;
            const forecastResponse = await response[1].data;
            setWeather(weatherResponse);
            setForecast(forecastResponse);
        })
    }

    const getLastOcurrenceWeather = ():void =>{
        let ocurrenceList: Array<number> = weather.weather;
        let getlastOcurrence: number = ocurrenceList?.[ ocurrenceList?.length - 1 ];

        setLastOccurrenceWeather(getlastOcurrence);
    }

    const convertTemperature = async() =>{
        let kelvinTemperature = await weather.main?.temp;
        let celsius =  kelvinTemperature - 273;
        let test = celsius.toFixed(0)
        setCelsiusTemperature(test);
    }

    const handleLoad = async()=>{
        await getWeather();
    }

    useEffect(()=>{
        const interval =  setInterval(async()=>{
            await getWeather();
        }, 1800000)
        
        return () => {
            clearInterval(interval);
        };
    });
    
    useEffect(()=>{
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    });
    useEffect(()=>{
        console.log(weather);
        console.log(forecast);
        convertTemperature();
        getLastOcurrenceWeather();
    }, [weather, forecast])
    return(
        <div className="sidebar-right-container">
            <div></div>
            <div className="weather-container">
            <div className="weather-local-container">
                <p className="weather"> { lastOccurrenceWeather ? lastOccurrenceWeather.main: 'Loading...' } </p>
                <p className="local">{ weather.name },  { weather.sys?.country }</p>
            </div>
            <div className="temperature-container">
                <p>{ celsiusTemperature } °C</p>
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
