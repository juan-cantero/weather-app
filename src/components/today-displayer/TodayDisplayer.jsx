import React from 'react';
import './TodayDisplayer.css';
import WeatherIcon from '../weatherIcon/WeatherIcon';

export default function TodayDisplayer({ icon, main, temp }) {
  let { day, max, min } = temp;
  day = Math.trunc(day);
  max = Math.trunc(max);
  min = Math.trunc(min);
  return (
    <div className="TodayDisplayer">
      <div className="icon">
        <WeatherIcon icon={icon} />
        <p>{main}</p>
      </div>
      <h1>
        {day}
        <sup>°C</sup>
      </h1>
      <div className="Max-Min">
        <p>{max}°C</p>
        <p>{min}°C</p>
      </div>
    </div>
  );
}
