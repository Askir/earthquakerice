import React from 'react';
import './QuakeList.scss';
import { ic_gps_fixed } from 'react-icons-kit/md/ic_gps_fixed';
import { Icon } from 'react-icons-kit';
import QuakeItem from './QuakeItem';

function QuakeList({ earthquakes = [] }) {
  return (
    <div className="QuakeList">
      <HeadRow />
      {earthquakes.map((earthquake) => <QuakeItem earthquake={earthquake} key={earthquake.id} />)}
    </div>
  );
}

function HeadRow() {
  return (
    <div className="QuakeItem">
      <div>
        {'Location'}
        <Icon icon={ic_gps_fixed} />
      </div>
      <div>
        {'Time'}
      </div>
      <div>
        {'Magnitude'}
      </div>
    </div>
  );
}
export default QuakeList;
