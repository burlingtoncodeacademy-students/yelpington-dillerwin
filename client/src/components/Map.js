import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

function Map(props) {
  return (
    <MapContainer
      center={props.center}
      zoom={8}
      style={{
        display: "flex",
        justifyContent: "center",
        height: "600px",
        width: "600px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={}
    </MapContainer>
  );
}

export default Map;
