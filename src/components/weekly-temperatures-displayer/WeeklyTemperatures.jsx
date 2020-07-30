// @ts-nocheck
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

//components
import DailyTemp from '../daily-temp/DailyTemp';

//styles
import './WeeklyTemperatureDisplayer.css';

export default function WeeklyTemperaturesDisplayer({ daily }) {
  const days = daily.slice(1, 6);
  let plusDays = [1, 2, 3, 4, 5];
  return (
    <div className="WeeklyTemperaturesDisplayer">
      {days.map((day) => {
        return (
          <DailyTemp
            className="dayOfWeek"
            key={uuidv4()}
            icon={day.weather[0].icon}
            plusDay={plusDays.shift()}
            max={day.temp.max}
            min={day.temp.min}
          />
        );
      })}
    </div>
  );
}
