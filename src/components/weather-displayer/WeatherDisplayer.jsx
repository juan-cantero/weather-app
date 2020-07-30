// @ts-nocheck
import React from 'react';
import MainDisplayer from '../main-displayer/MainDisplayer';

export default function WeatherDisplayer({ weatherInfo }) {
  const current = weatherInfo.current;
  console.log(weatherInfo);
  return (
    <div>
      <MainDisplayer current={current} />
    </div>
  );
}
