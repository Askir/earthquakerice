import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss';

function Map({ earthquakes }) {
  const losAngelesCoords = { lat: 34, lng: -118 };
  const [center, setCenter] = useState(losAngelesCoords);
  const [zoom, setZoom] = useState(8);
  function handleZoomChanged(newZoom) {
    console.log(newZoom);
    setZoom(newZoom);
  }
  return (
    <div>
      <div className="MapHeader">Recent Earthquakes Heatmap</div>
      <div className="MapWrapper">
        <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
        onZoomAnimationEnd={handleZoomChanged}
      >
        {earthquakes.map((earthquake) => (
          <RedCircle
            lat={earthquake.geometry.coordinates[1]}
            lng={earthquake.geometry.coordinates[0]}
            key={earthquake.id}
            radius={zoom * earthquake.properties.mag}
          />
        ))}

      </GoogleMapReact>
      </div>
    </div>
  );
}

function RedCircle({ radius = 20 }) {
  return (
    <div style={{ width: radius, height: radius }} className="RedCircle" />
  );
}


export default Map;
