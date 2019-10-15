import React from 'react';
import './QuakeList.scss';
import QuakeItem from './QuakeItem';

function QuakeList({ earthquakes = [] }) {
  return (
    <div className="QuakeList">
      {earthquakes.map((earthquake) => <QuakeItem earthquake={earthquake} key={earthquake.id} />)}
    </div>
  );
}

export default QuakeList;
