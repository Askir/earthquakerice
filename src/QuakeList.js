import React from 'react';
import './QuakeList.scss';
import { ic_gps_fixed as IcGpsFixed } from 'react-icons-kit/md/ic_gps_fixed';
import { ic_access_time as IcAccessTime } from 'react-icons-kit/md/ic_access_time';
import { ic_trending_up as IcTrendingUp } from 'react-icons-kit/md/ic_trending_up';
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
    <div className="QuakeHeader">
      <div className="Location">
        {'Location'}
        <Icon className="Icon" size="30px" icon={IcGpsFixed} />
      </div>
      <div className="Time">
        {'Time'}
        <Icon className="Icon" size="30px" icon={IcAccessTime} />
      </div>
      <div className="Magnitude">
        {'Magnitude'}
        <Icon className="Icon" size="30px" icon={IcTrendingUp} />
      </div>
    </div>
  );
}
export default QuakeList;
