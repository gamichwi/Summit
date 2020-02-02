import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = props => {
  //connects the div below to the constant mapRef
  const mapRef = useRef();

  const { center, zoom } = props;

  //useEffect allows us to register logic (a function) that should be executed when certain elements change
  useEffect(() => {
    //constructor function available on the global variable 'window' due to script in index.html
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom
    });
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]); //will run whenever center, zoom changes

  return (
    <div
      ref={mapRef}
      className={'map'}
      style={props.style}
    ></div>
  );
};

export default Map;
