import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./TWL.css";

function Thewhitelotus() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  //if maps !isLoaded(hasnt loaded) return Loading... else return the Map function
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const DomenicoPalace = useMemo(() => ({ lat: 37.8498, lng: 15.2834 }), []);
  const Noto = useMemo(() => ({ lat: 36.8924, lng: 15.0652 }), []);
  const Pal = useMemo(() => ({ lat: 38.1157, lng: 13.3615 }), []);

  return (
    <div className="TWL-Maps">
      <h2>San Domenico Palace, Taormina</h2>
      <br />
      <div className="Taorminacontainer">
        <br />
          <article className="Taormina-article">
          Dubrovnik is a
          city in southern Dalmatia, Croatia, by the Adriatic Sea. It was
          historically known as Ragusa (pronounced [raˈɡuza]; see notes on
          naming). It is one of the most prominent tourist destinations in the
          Mediterranean, a seaport and the centre of the Dubrovnik-Neretva
          County. Its total population is 42,615 (2011 census). In 1979, the
          city of Dubrovnik was added to the UNESCO list of World Heritage Sites
          in recognition of its outstanding medieval architecture and fortified
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
      <h2>Noto, Sicily</h2>
      <br />
      <div className="notocontainer">
        <br />
        <GoogleMap
          zoom={8}
          center={Noto}
          mapContainerClassName="map-container">
          <MarkerF position={Noto} />
        </GoogleMap>
        <article className="noto-article">
        At the edge of Kings Landing, there is a large body of water called Blackwater Bay. It houses Driftmark,
        a castle and home to House Velaryon. It previously featured in Game of Thrones during the Battle of the Blackwater. Lord Corlys Velaryon, also known as the Sea Snake, is a key character in House of the Dragon,
        sitting on the small council as Master of Ships.
        
        In reality, Driftmark is a medieval church dating back to the 12th century on St. Michael’s Mount,
        a rocky island housing a small community off the coast of Cornwall, linked to Marazion island by a tidal causeway.
          </article>
      </div>
      <br />
      <br />
      <br />
      <h2>Palermo, Italy</h2>
      <br />
      <div className="palcontainer">
      <article className="pal-article">
      HBO returned to Cáceres in Spain to film scenes for House of The Dragon, after the filming location
       was previously used in Game of Thrones it stood in for the Lannister stronghold, King's Landing, in season 7.

       The scenes in the streets of King's Landing from episodes eight and nine, "The Lord of the Tides" and "The Green Council", were filmed in Cáceres.

The Dragonpit exterior was filmed at St. George's Square, removing San Francisco Javier church digitally.
          </article>
        <br />
      <GoogleMap 
        zoom={8} 
        center={Pal} 
        mapContainerClassName="map-container">
        <MarkerF position={Pal} />
      </GoogleMap>
      </div>
    </div>
  );
}

export default Thewhitelotus;
