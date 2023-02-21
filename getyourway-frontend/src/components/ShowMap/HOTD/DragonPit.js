import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './GoogleMaps.css'

function DragonPit() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });


  //if maps !isLoaded(hasnt loaded) return Loading... else return the Map function
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  //center will load the map at co-ordinates shown
  const center = useMemo(() => ({ lat: 42.6, lng: 18.1 }), []);

  return (
    <div className="container">
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
       <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default KingsLanding;