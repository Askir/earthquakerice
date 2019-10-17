import React from 'react';
import './QuakeList.scss';

function QuakeItem({ earthquake = {} }) {
  const date = new Date(earthquake.properties.time);
  return (
    <li className="QuakeItem">
      <div className="place">
        {earthquake.properties.place}
      </div>
      <div className="time">{date.toLocaleString()}</div>
      <div className="magnitude">
        {' '}
        {earthquake.properties.mag}
        {' '}
      </div>
    </li>
  );
}

export default QuakeItem;
