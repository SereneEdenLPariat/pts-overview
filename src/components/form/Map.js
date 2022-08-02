import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";

// import Zoom from "react-medium-image-zoom";
// import { Controlled as ControlledZoom } from "react-medium-image-zoom";

//  const [isZoomed, setIsZoomed] = useState(false);

export const Map = () => {
  return (
    <MapContainer
      className="map"
      center={[25.5788, 91.8933]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[25.5788, 91.8933]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
