import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
const ShopMap = () => {
  const position = [23.958888966845283, 90.27159732918626]; // position for shop
  return (
    <>
      <div>
        <SectionTitle subHeading="" heading="Shop Location" />
      </div>

      <div className="py-10 ">
        <AnimatedComponent animation="fade-right" duration={2500} offset={100}>
          <MapContainer
            center={position}
            zoom={20}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <div>
                  <h2>
                    <span className="font-bold">Shop : </span>Glow Mart BD Store{" "}
                  </h2>
                  <p>
                    <span className="font-bold">Address : </span>
                    Sripur,Savar,Dhaka
                  </p>
                  <p>
                    <span className="font-bold">Mobile : </span> +8801998838992
                  </p>
                  <p>
                    <span className="font-bold">Email : </span>{" "}
                    sohel152302@gmail.com
                  </p>
                  <p>
                    <span className="font-bold">Hours : </span> Mon-Fri 9am-6pm
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </AnimatedComponent>
      </div>
    </>
  );
};

export default ShopMap;
