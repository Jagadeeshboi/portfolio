import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet"
function Map() {
    const position = [16.493189, 81.563548]
        
return (
  <MapContainer className="map" center={position} zoom={11} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
        <Popup>
          Bethapudi <br/>Bhimavaram
        </Popup>
    </Marker>
  </MapContainer>
)
}

export default Map
