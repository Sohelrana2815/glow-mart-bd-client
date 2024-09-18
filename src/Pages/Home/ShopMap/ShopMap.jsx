import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
const ShopMap = () => {
  const position = [23.958888966845283, 90.27159732918626]; // position for shop
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <div>
            <h2>Shop: বিসমিল্লাহ জেনারেল স্টোর</h2>
            <p>Address: এ.রহমান প্লাজা,শ্রীপুর,ঢাকা</p>
            <p>Contact: +880 1234 567890</p>
            <p>Hours: Mon-Fri 9am-6pm</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ShopMap;
