import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./TLOU.css";
import { Button, CardActions } from '@mui/material';


// }

function TLOU() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  const ed = useMemo(() => ({ lat: 53.5461, lng: 113.4937 }), []);
  const cal = useMemo(() => ({ lat: 50.1172, lng: 114.0719 }), []);
  const can = useMemo(() => ({ lat: 51.0899, lng: 115.3441 }), []);

  if (!isLoaded) { return <div>Loading...</div>}
  else {

  return (
    <div className="TLOU-Maps">
      <h2>Edmonton, Canada</h2>
      <br />
      <div className="edmontoncontainer">
        <br />
          <article className="edmonton-article">
          Dubrovnik is a
          city in southern Dalmatia, Croatia, by the Adriatic Sea. It was
          historically known as Ragusa (pronounced [raˈɡuza]; see notes on
          naming). It is one of the most prominent tourist destinations in the
          Mediterranean, a seaport and the centre of the Dubrovnik-Neretva
          County. Its total population is 42,615 (2011 census). In 1979, the
          city of Dubrovnik was added to the UNESCO list of World Heritage Sites
          in recognition of its outstanding medieval architecture and fortified


          <div>
          <CardActions>
            <Button className="travellinks" size="large" color="primary">
                Visit The This Location
              </Button>
          </CardActions>
          </div>
          </article>
        <GoogleMap
          zoom={8}
          center={ed}
          mapContainerClassName="map-container">
          <MarkerF position={ed} />
        </GoogleMap>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h2>Calgary, Canada</h2>
      <br />
      <div className="calgarycontainer">
        <br />
        <GoogleMap
          zoom={8}
          center={cal}
          mapContainerClassName="map-container">
          <MarkerF position={cal} />
        </GoogleMap>
        <article className="calgary-article">
        At the edge of Kings Landing, there is a large body of water called Blackwater Bay. It houses Driftmark,
        a castle and home to House Velaryon. It previously featured in Game of Thrones during the Battle of the Blackwater. Lord Corlys Velaryon, also known as the Sea Snake, is a key character in House of the Dragon,
        sitting on the small council as Master of Ships.
        
        In reality, Driftmark is a medieval church dating back to the 12th century on St. Michael’s Mount,
        a rocky island housing a small community off the coast of Cornwall, linked to Marazion island by a tidal causeway.


        <div>
          <CardActions>
            <Button className="travellinks" size="large" color="primary">
                Visit The This Location
              </Button>
          </CardActions>
          </div>
          </article>
      </div>
      <br />
      <br />
      <br />
      <h2>Canmore, Canada</h2>
      <br />
      <div className="canmorecontainer">
      <article className="canmore-article">
      HBO returned to Cáceres in Spain to film scenes for House of The Dragon, after the filming location
       was previously used in Game of Thrones it stood in for the Lannister stronghold, King's Landing, in season 7.

       The scenes in the streets of King's Landing from episodes eight and nine, "The Lord of the Tides" and "The Green Council", were filmed in Cáceres.

The Dragonpit exterior was filmed at St. George's Square, removing San Francisco Javier church digitally.


<div>
          <CardActions>
            <Button className="travellinks" size="large" color="primary">
                Visit The This Location
              </Button>
          </CardActions>
          </div>
          </article>
        <br />
      <GoogleMap 
        zoom={8} 
        center={can} 
        mapContainerClassName="map-container">
        <MarkerF position={can} />
      </GoogleMap>
      </div>
    </div>
  );
}
};

export default TLOU;
