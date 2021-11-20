import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function Map(props) {
  function MyComponent({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  // function MarkerClick({ center, zoom }) {
  //   const map = useMapEvent("click", (event) => {
  //     map.setView(center, zoom);
  //     console.log(`clicked`);
  //     props.setdiner(event.target.id);
  //   });
  //   return null;
  // }

  function handleClick(event) {
    console.log(`clicked`);
    event.preventDefault();
    let targetId = event.target.id;
    props.setdiner(targetId);
  }

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      style={{
        height: "600px",
        width: "600px",
      }}
    >
      <MyComponent center={props.center} zoom={props.zoom} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* markers for diners */}
      <Marker id="als" position={[44.467162, -73.1765308]}>
        <Popup id="als">Al's French Fries</Popup>
      </Marker>
      <Marker id="athens" position={[44.5036718, -73.184801]}>
        <Popup>Athen's Diner</Popup>
      </Marker>
      <Marker id="common" position={[44.1488783, -72.6584726]}>
        <Popup>The Common Cafe</Popup>
      </Marker>
      <Marker id="creek-house" position={[43.8096639, -72.652306]}>
        <Popup>Creek House Diner</Popup>
      </Marker>
      <Marker id="four-aces" position={[43.6501609, -72.3145]}>
        <Popup>Four Ace's Diner</Popup>
      </Marker>
      <Marker id="henrys" position={[44.4780127, -73.215699]}>
        <Popup>Henry's Diner</Popup>
      </Marker>
      <Marker id="red-arrow" position={[42.9935086, -71.4636055]}>
        <Popup>Red Arrow Diner</Popup>
      </Marker>
      <Marker id="village" position={[44.5041242, -72.3696713]}>
        <Popup id="village" onClick={handleClick}>
          Village Restaurant
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
