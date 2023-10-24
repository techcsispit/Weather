// icon and data
import React, { useState } from "react";
import Bgchange from "../bgchangescript.js";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const iconURL = "https://openweathermap.org/img/wn/";

function Templayout(props) {
    // Get weather details
    const weather = props.weather1.main;
    const weatherdesc = props.weather1.description;
    const weathericon = props.weather1.icon;
    const humidity = props.temp1.humidity;
    const pressure = props.temp1.pressure;
    const windspeed = props.wind1.speed;
    const winddirection = props.wind1.deg;
    // Get temperature details
    const temperature = Math.round((props.temp1.temp) - 273);
    const mintemp = Math.round((props.temp1.temp_min) - 273);
    const maxtemp = Math.round((props.temp1.temp_max) - 273);
    // Get details of location of user
    const city = props.city1;
    const country = props.country1;
    const timestamp = props.timestamp1;
    const timezone = props.timezone1;

    let date = new Date();

    // Periodically update date every 6 seconds
    setInterval(() => {
        date = new Date();
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        date = new Date(utc + (1000 * timezone));
    }, 6000);

    // Get timing details
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dateofmonth = date.getDate();
    let month = months[date.getMonth()];
    let weekday = weekdays[date.getDay()];
    let year = date.getFullYear();

    // Periodically change background based on current time
    Bgchange(hours);

    // Returns Minimum and Maximum temperature of the day
    function minmax() {
        if (mintemp !== maxtemp)
            return (
                <div className="minmaxtemp">
                    {mintemp}°C - {maxtemp}°C
                </div>
            );
    }

    // Function to set weather icon
    function setIcon() {
        return (<img src={`${iconURL + weathericon}@2x.png`} alt={weatherdesc}></img>);
    }

    // Set hours
    let ampm = "";
    function setHours() {
        if (hours > 12 && hours <= 23) {
            hours = hours - 12;
            ampm = "PM";
        }
        else if (hours === 0) {
            hours = 12;
            ampm = "AM";
        }
        else
            ampm = "AM";
        return hours;
    }

    // Set minutes
    function setMinutes() {
        if (minutes < 10)
            return (<span>0{minutes}</span>);
        return (<span>{minutes}</span>);
    }

    return (
        <div>
            <div className="outer-data">

                <div className="icon-desc">
                    <div className="data-icon">
                        {setIcon()}
                    </div>
                    <div className="data-weather">
                        <h2>{weather}</h2>
                        <p>{weatherdesc}</p>
                    </div>
                </div>

                <div className="data">
                    <div className="humidity-pressure">
                        <div className="data-humidity">
                            <i className="fa fa-thermometer-half"></i>
                            <p>Humidity: {humidity}%</p></div>
                        <div className="data-pressure">
                            <i className="fa-solid fa-gauge-high"></i>
                            <p>Pressure: {pressure} hPa</p></div>
                    </div>

                    <div className="data-temp">
                        <div className="temp">
                            {temperature}°C
                        </div>
                        <div className="data-other">
                            <div className="data-location">
                                {city}, {country}
                            </div>
                            <div className="data-minmax">
                                {minmax()}
                            </div>
                        </div>
                    </div>

                    <div className="wind-data">
                        <div className="data-speed">
                            <i className="fa-solid fa-wind"></i>
                            <p>Wind speed: {windspeed} m/s</p>
                        </div>
                        <div className="data-direction">
                            <i className="fa-solid fa-compass"></i>
                            <p>Wind direction: {winddirection} deg</p></div>
                    </div>
                </div>
            </div>

            <div className="date-time">
                <div className="date"> {weekday}, {dateofmonth} {month} {year} </div>
                <div className="time">{setHours()}:{setMinutes()} {ampm}</div>
            </div>
        </div>
    );
}

export default Templayout;