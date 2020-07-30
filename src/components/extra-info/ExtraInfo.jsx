import React from 'react';

//styles
import './ExtraInfo.css';

export default function ExtraInfo({ icon, info, description }) {
  return (
    <div className="ExtraInfo">
      <img src={icon} />
      <div>{info}</div>
      <div>{description}</div>
    </div>
  );
}
