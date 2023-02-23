import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./TWL.css";
import { Button, CardActions } from '@mui/material';



  //if maps !isLoaded(hasnt loaded) return Loading... else return the Map function
  // if (!isLoaded) return <div>Loading...</div>;
  // return <Map />;
// }

function TWL() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  const DomenicoPalace = useMemo(() => ({ lat: 37.8498, lng: 15.2834 }), []);
  const Wailea = useMemo(() => ({ lat: 20.862416178, lng: -156.482784134 }), []);
 

  if (!isLoaded) { return <div>Loading...</div>}
  else {

  return (
    <div className="TWL-Maps">
      <h2>San Domenico Palace, Taormina</h2>
      <br />
      <div className="Taorminacontainer">
        <br />
          <article className="Taormina-article">
          Most of the action takes place at the San Domenico Palace hotel in Taormina, 
          on the north-east coast of Sicily. Situated high on the rocks a little inland, 
          it overlooks the Ionian Sea, Mount Etna and an ancient amphitheatre, built in 
          the Greek style by the Romans. As well as the still-active Etna, the town is 
          famous for its proximity to the Isola Bella nature reserve and for its medieval 
          architecture, which put it on the map for the 
          aristocratic Grand Tour of the 19th century.


          <div>
          <CardActions>
            <Button className="travellinks" size="large" color="primary">
                Visit This Location
              </Button>
          </CardActions>
          </div>
          </article>
        <GoogleMap
          zoom={8}
          center={DomenicoPalace}
          mapContainerClassName="map-container">
          <MarkerF position={DomenicoPalace} />
        </GoogleMap>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h2>Four Seasons Resort Maui at Wailea, Hawaii</h2>
      <br />
      <div className="waileacontainer">
        <br />
        <GoogleMap
          zoom={8}
          center={Wailea}
          mapContainerClassName="map-container">
          <MarkerF position={Wailea} />
        </GoogleMap>
        <article className="Wailea-article">
        Having become one of the breakout hits of the 2021 lockdown, and then winning 10 Emmy Awards, 
        The White Lotus turned from a self-contained mini-series into a franchise. Depicting a highly 
        eventful week in the luxurious Hawaiian resort of the title, where glossily monied guests meet 
        harried hotel staff, season one employed farce, black comedy and just enough closely observed 
        sympathy to skewer the more problematic aspects of luxury travel. Filmed in a single location 
        under strict covid protocols, it had a rare edge that was partly fuelled by the situation of 
        its making but the prospect of a new season, with us now, is still to be relished.


        <div>
          <CardActions>
            <Button className="travellinks" size="large" color="primary">
                Visit This Location
              </Button>
          </CardActions>
          </div>
          </article>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
};

export default TWL;
