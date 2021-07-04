import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../config';

export default function Map({ location }) {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}
