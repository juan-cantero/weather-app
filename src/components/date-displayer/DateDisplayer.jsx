// @ts-nocheck
import React from 'react';

//utils
import { getDate } from '../../utils/Time';

//style
import './DateDisplayer.css';
const locationIcon = require('../../images/icons/location.png');
export default function DateDisplayer({ locality, country }) {
  return (
    <div className="DateDisplayer">
      <div className="date">{getDate()}</div>
      <div className="location">
        {locality + ', ' + country}
        <img src={locationIcon} alt="location icon" />
      </div>
    </div>
  );
}
