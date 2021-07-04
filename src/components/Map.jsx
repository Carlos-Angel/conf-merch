import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../config';

export default function Map() {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: 17.552186,
    lng: -99.50135,
  };

  return (
    <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}
