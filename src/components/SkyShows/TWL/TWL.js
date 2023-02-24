import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, PolylineF } from "@react-google-maps/api";
import "./TWL.css";
import { Button, CardActions } from "@mui/material";
import axios from "axios";
import { SERVER_URL } from "../../constants";

//if maps !isLoaded(hasnt loaded) return Loading... else return the Map function
// if (!isLoaded) return <div>Loading...</div>;
// return <Map />;
// }

function TWL() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDlclJ01LYwV8VOQhk837FkIdMyhCyE48M",
  });
  const DomenicoPalace = useMemo(() => ({ lat: 37.8498, lng: 15.2834 }), []);
  const Wailea = useMemo(() => ({ lat: 20.862416178, lng: -156.482784134 }), []);
 

	const [flightDuration, setFlightDuration] = useState("");
	const [weatherResponse, setWeatherResponse] = useState();

	const dominiopalacePlanCoordinates = [
		{ lat: 37.8498, lng: 15.2834 },
		{ lat: 37.4673, lng: 15.0658 },
		{ lat: 51.1537, lng: -0.1821 }
	];
  const waileaPlanCoordinates = [
		{ lat: 20.862416178, lng: -156.482784134 },
		{ lat: 20.8946, lng: -156.4361},
		{ lat: 51.4700, lng: -0.4543 }
	];

	let weatherUrl = "";

	const handleSearch = (dest) => {
		// The setIsLoading is set to true and displays message
		const token = sessionStorage.getItem("jwt");
		const url = SERVER_URL + "flight";
		let payload = {};
		// This data is taken from the states at the top of the page and submits as a JSON structure.
		switch (dest) {
			case "visitA":
				weatherUrl = "weather/Sicily";
				payload = {
					departure: "LGW",
					destination: "CTA",
					date: "2023-03-01",
					adults: 1,
				};
				break;
			case "visitB":
				weatherUrl = "weather/Hawaii";
				payload = {
					departure: "LHR",
					destination: "ITO",
					date: "2023-03-01",
					adults: 1,
				};
				break;
		}

		// if (dest === "visitB") {
		// 	weatherUrl = "weather/Hawaii";
		// 	payload = {
		// 		departure: "LGW",
		// 		destination: "CTA",
		// 		date: "2023-03-01",
		// 		adults: 1,
		// 	};
		// } else if(dest === "VisitA") {
		// 	weatherUrl = "weather/Sicily";
		// 	payload = {
		// 		departure: "LHR",
		// 		destination: "ITO",
		// 		date: "2023-03-01",
		// 		adults: 1,
		// 	};
		// }
		// Comment end
		axios
			.post(url, payload, { headers: { Authorization: token } })
			.then((response) => {
				// setFlightDuration(response.data.duration);
				// The setIsLoading is set to false and hides the message
				console.log(response.data);
				// console.log(response.data.duration);

				setFlightDuration(response.data);

				console.log(flightDuration);

				console.log(payload);
				// Console log an error if the response is

				if (response.data.length === 0) {
					setFlightDuration(
						"No Flight found for this destination on this day!"
					);
				}
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(SERVER_URL + weatherUrl, {
				headers: { Authorization: token },
			})
			.then((response) => {
				console.log(response.data.weather);
				setWeatherResponse(
					`The temperature is currently ${response.data.weather} degrees celsius`
				);

				if (response.data.length === 0) {
					setWeatherResponse(
						"No Weather data has been returned for this destination!"
					);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<div className="columns">
					<div className="column">
						<h2>San Domenico Palace, Taormina</h2>
						<br />
						<div className="Taorminacontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={DomenicoPalace}
								mapContainerClassName="map-container"
							>
								<MarkerF position={{ lat:51.1536621 , lng: -0.18206290000000536 }} />
								<MarkerF position={DomenicoPalace} />
								<PolylineF
									path={dominiopalacePlanCoordinates}
									strokeColor="#FF0000"
									strokeOpacity={1.0}
									strokeWeight={2}
								/>
							</GoogleMap>
							<article className="Taormina-article">
							Situated high on the rocks on Sicily's north east coast, most of the action of 
							season two of The White Lotus takes place in the expansive San Domenico Palace - 
							once a 15th century monastery, now a luxury resort in the Four Seasons group after 
							a careful 2021 refurbishment. There's 111 rooms, suites and speciality suites, a spa, 
							a fine-dining restaurant, ancient courtyards and gardens, and a beautiful 
							infinity pool - a scene stealer in The White Lotus.
								<div>
									<CardActions>
										<Button
											className="travellinks"
											size="large"
											color="primary"
											onClick={() => handleSearch("visitA")}
										>
											Visit The This Location
										</Button>
									</CardActions>
								</div>
							</article>
						</div>
					</div>

					<div className="column">
						<h2>Four Seasons Resort Maui at Wailea, Hawaii</h2>
						<br />
						<div className="waileacontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={Wailea}
								mapContainerClassName="map-container"
							>
								<MarkerF position={{ lat: 51.487, lng: -0.327 }} />
								<MarkerF position={Wailea} />
								<PolylineF
									path={waileaPlanCoordinates}
									strokeColor="#FF0000"
									strokeOpacity={1.0}
									strokeWeight={2}
								/>
							</GoogleMap>
							<article className="Wailea-article">
								Having become one of the breakout hits of the 2021 lockdown, and
								then winning 10 Emmy Awards, The White Lotus turned from a
								self-contained mini-series into a franchise. Depicting a highly
								eventful week in the luxurious Hawaiian resort of the title,
								where glossily monied guests meet harried hotel staff, season
								one employed farce, black comedy and just enough closely
								observed sympathy to skewer the more problematic aspects of
								luxury travel. Filmed in a single location under strict covid
								protocols, it had a rare edge that was partly fuelled by the
								situation of its making but the prospect of a new season, with
								us now, is still to be relished.
								<div>
									<CardActions>
										<Button
											className="travellinks"
											size="large"
											color="primary"
											onClick={() => handleSearch("visitB")}
										>
											Visit The This Location
										</Button>
									</CardActions>
								</div>
							</article>
						</div>
					</div>
				</div>
				<div>
					<h2 id="flight">{flightDuration}</h2>
					<h2 id="weather">{weatherResponse}</h2>
				</div>
			</>
		);
	}
}

export default TWL;
