import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { map } from "leaflet";
import { Link } from "react-router-dom";

function Map(props) {
  return (
    <MapContainer
      center={props.center}
      zoom={8}
      style={{
        height: "600px",
        width: "600px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* markers for diners */}
      <Marker position={[44.467162, -73.1765308]}>
        <Popup>Al's French Fries</Popup>
      </Marker>
      <Marker position={[44.5036718, -73.184801]}>
        <Popup>Athen's Diner</Popup>
      </Marker>
      <Marker position={[44.1488783, -72.6584726]}>
        <Popup>The Common Cafe</Popup>
      </Marker>
      <Marker position={[43.8096639, -72.652306]}>
        <Popup>Creek House Diner</Popup>
      </Marker>
      <Marker position={[43.6501609, -72.3145]}>
        <Popup>Four Ace's Diner</Popup>
      </Marker>
      <Marker position={[44.4780127, -73.215699]}>
        <Popup>Henry's Diner</Popup>
      </Marker>
      <Marker position={[42.9935086, -71.4636055]}>
        <Popup>Red Arrow Diner</Popup>
      </Marker>
      <Marker position={[44.5041242, -72.3696713]}>
        <Popup>Village Restaurant</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
