import React from 'react';
import './QuakeList.scss';

function QuakeItem({ earthquake = {} }) {
  const date = new Date(earthquake.properties.time);
  return (
    <div className="QuakeItem">
      <p>{earthquake.properties.place}</p>
      <p>{date.toLocaleString()}</p>
      <p>
        {' '}
        {earthquake.properties.mag}
        {' '}
      </p>
    </div>
  );
}

export default QuakeItem;
