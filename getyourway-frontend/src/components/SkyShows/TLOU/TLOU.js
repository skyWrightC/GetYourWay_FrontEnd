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
          While Joel and Ellie’s journey is set in America, The Last Of Us was filmed in Canada.
          According to CTV News, it was the largest production to ever take place in the country.

          The production was mostly filmed around Calgary, Edmonton, Canmore, Fort Macleod and Waterton.

          Edmonton, the capital city of Alberta, was selected to play Boston with the 
          Alberta Legislature Building acting as the city’s capital.

          Many scenes in the first episode, which takes place prior to the pandemic, were shot within Calgary. 
          A bunch of post-pandemic scenes were also filmed in the region,
          including shots featuring highways overrun with foliage.


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
        Many scenes in the first episode, which takes place prior to the pandemic, were shot within Calgary. 
          A bunch of post-pandemic scenes were also filmed in the region,
          including shots featuring highways overrun with foliage.


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
      The community of Jackson, Wyoming, which is set to feature in a later episode, 
      was filmed in the town of Canmore. Waterton Lakes National Park, meanwhile, 
      was used in place of Colorado for hiking scenes between Joel and Ellie.


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
