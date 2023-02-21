import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MultiActionAreaCard from '../Cards/Cards'
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
  const center = useMemo(() => ({ lat: 51, lng: -0.32 }), []);


  return (
    <div className="container">
      <div className='dashboard-nav'>
      <h1>Dashboard</h1>
      <br />
      <h2>Sky Shows</h2>
      <br />
      <MultiActionAreaCard />
      <br />
        <h2>Google Maps</h2>
      </div>
      <br />
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
      <br />
      
    </div>
  );
}

export default Home