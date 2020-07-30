// @ts-nocheck
import React from 'react';

//components
import ExtraInfo from '../extra-info/ExtraInfo';

//utils
import { getHours } from '../../utils/Time';

//style
import './ExtraInfoDisplayer.css';

export default function ExtraInfoDisplayer({ current }) {
  const { dt, sunrise, sunset, humidity, pressure, wind_speed } = current;

  return (
    <div className="ExtraInfoDisplayer">
      <ExtraInfo
        className="humidity"
        icon={require('../../images/icons/027-humidity.png')}
        info={humidity}
        description="humidity"
      />
      <ExtraInfo
        icon={require('../../images/icons/050-barometer.png')}
        info={pressure}
        description="pressure"
      />
      <ExtraInfo
        icon={require('../../images/icons/001-wind-1.png')}
        info={wind_speed}
        description="wind"
      />
      <ExtraInfo
        icon={require('../../images/icons/008-sunrise.png')}
        info={getHours(sunrise) + ' am'}
        description="sunrise"
      />
      <ExtraInfo
        icon={require('../../images/icons/007-sunset.png')}
        info={getHours(sunset) + ' pm'}
        description="sunset"
      />
      <ExtraInfo
        icon={require('../../images/icons/daytime.png')}
        info={getHours(dt)}
        description="day time"
      />
    </div>
  );
}
