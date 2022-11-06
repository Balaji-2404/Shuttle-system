import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



const Mapview = () => {
  
  return (
    <>
      <div className="container w-full h-full z-0"id="track">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        <h4 className="text-xl font-medium">Map</h4>
        <div className="w-full h-full">
          
        </div>
      </div>
      
    </>
  );
};

export default Mapview;