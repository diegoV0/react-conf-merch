import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import '../styles/components/Map.css';

const Map = ({ data }) => {
  const defaultCenter = [data.latitude, data.longitude];

  return (
    <MapContainer center={defaultCenter} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter} />
    </MapContainer>
  );
};

export default Map;
