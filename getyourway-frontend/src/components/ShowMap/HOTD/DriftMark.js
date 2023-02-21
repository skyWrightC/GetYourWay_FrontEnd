import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './GoogleMaps.css'

function DriftMark() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });


  //if maps !isLoaded(hasnt loaded) return Loading... else return the Map function
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  //center will load the map at co-ordinates shown
  const center = useMemo(() => ({ lat: 50, lng: -5}), []);

  return (
    <div className="container">
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
       <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default DriftMark;