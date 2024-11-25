import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Déclarer DefaultIcon avec const
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  center: [number, number];
  zoom: number;
}

// Utilisez vos coordonnées de position
const centerCoordinates: [number, number] = [-4.344857363314129, 15.349629558896211];
const zoomLevel = 13;  // Définissez le niveau de zoom souhaité

const Map: React.FC<MapProps> = () => {
  return (
    <div className="h-[400px] w-full">
      <MapContainer center={centerCoordinates} zoom={zoomLevel} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={centerCoordinates}>
          <Popup>
            Beauty Salon <br /> Nous sommes ici !
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;