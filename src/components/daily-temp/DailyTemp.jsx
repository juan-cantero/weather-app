// @ts-nocheck
import React from 'react';
//utils
import { getDay } from '../../utils/Time';
//style
import './DailyTemp.css';
import WeatherIcon from '../weatherIcon/WeatherIcon';
const upIcon = require('../../images/icons/up.png');
const downIcon = require('../../images/icons/down.png');

export default function DailyTemp({ icon, plusDay, max, min }) {
  return (
    <div className="DailyTemp">
      <WeatherIcon icon={icon} />
      <div className="date">{getDay(plusDay)}</div>
      <div className="max-min">
        <div>
          {max}°C
          <img src={upIcon} />
        </div>
        <div>
          {min}°C
          <img src={downIcon} />
        </div>
      </div>
    </div>
  );
}
