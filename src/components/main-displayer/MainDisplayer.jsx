// @ts-nocheck
import React, { useReducer, useEffect } from 'react';
import TodayDisplayer from '../today-displayer/TodayDisplayer';

import ExtraInfoDisplayer from '../extra-info-displayer/ExtraInfoDisplayer';
//style
import './MainDisplayer.css';
import DateDisplayer from '../date-displayer/DateDisplayer';

export default function MainDisplayer({ current, city }) {
  const { weather, temp } = current;
  const { icon, main } = weather[0];
  const { locality, countryName } = city;
  //const { isoName } = city.localityInfo.administrative[1];

  return (
    <div className="MainDisplayer">
      <DateDisplayer locality={locality} country={countryName} />
      <TodayDisplayer icon={icon} main={main} temp={temp} />
      <ExtraInfoDisplayer current={current} />
    </div>
  );
}
