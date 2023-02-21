import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './Dashboard.css'

function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });


  //if maps !isLoaded(hasnt loaded) return Loading... else return the Map function
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  //center will load the map at co-ordinates shown
  const center = useMemo(() => ({ lat: 51, lng: -0.32 }), []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <br></br>
      <div className='dashboard-nav'>
        <h2>Google Maps</h2>
      </div>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
      <br />
      
    </div>
  );
}

export default Home