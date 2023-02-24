import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, PolylineF } from "@react-google-maps/api";
import "./TLOU.css";
import { Button, CardActions } from "@mui/material";
import axios from "axios";
import { SERVER_URL } from "../../constants";

// }

function TLOU() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "",
	});
	const ed = useMemo(() => ({ lat: 53.5461, lng: -113.4937 }), []);
	const cal = useMemo(() => ({ lat: 50.1172, lng: -114.0719 }), []);
	const can = useMemo(() => ({ lat: 51.0899, lng: -115.3441 }), []);

	const [flightDuration, setFlightDuration] = useState("");
	const [weatherResponse, setWeatherResponse] = useState();

	const edmontonPlanCoordinates = [
		{ lat: 53.5461, lng: -113.4937 },
		{ lat: 51.1215, lng: -114.0076 },
		{ lat: 51.4700, lng: -0.4543 }
	];
  const calgaryPlanCoordinates = [
		{ lat: 50.1172, lng: -114.0719 },
		{ lat: 51.1215, lng: -114.0076 },
		{ lat: 51.4700, lng: -0.4543 }
	];
  const canmorePlanCoordinates = [
		{ lat: 51.0899, lng: -115.3441},
		{ lat: 51.1215, lng: -114.0076 },
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
				weatherUrl = "weather/Edmonton";
				payload = {
					departure: "LHR",
					destination: "YEG",
					date: "2023-03-02",
					adults: 1,
				};
				break;
			case "visitB":
				weatherUrl = "weather/Calgary";
				payload = {
					departure: "LHR",
					destination: "YYC",
					date: "2023-03-01",
					adults: 1,
				};
				break;
			case "visitC":
				weatherUrl = "weather/Calgary";
				payload = {
					departure: "LHR",
					destination: "YYC",
					date: "2023-03-01",
					adults: 1,
				};
				break;
		}

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
						<h2>Edmonton, Canada</h2>
						<div className="edmontoncontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={ed}
								mapContainerClassName="map-container"
							>
								<MarkerF position={{ lat: 51.487, lng: -0.327 }} />
								<MarkerF position={ed} />
								<PolylineF
									path={edmontonPlanCoordinates}
									strokeColor="#FF0000"
									strokeOpacity={1.0}
									strokeWeight={2}
								/>
							</GoogleMap>
							<article className="edmonton-article">
								Dubrovnik is a city in southern Dalmatia, Croatia, by the
								Adriatic Sea. It was historically known as Ragusa (pronounced
								[raˈɡuza]; see notes on naming). It is one of the most prominent
								tourist destinations in the Mediterranean, a seaport and the
								centre of the Dubrovnik-Neretva County. Its total population is
								42,615 (2011 census). In 1979, the city of Dubrovnik was added
								to the UNESCO list of World Heritage Sites in recognition of its
								outstanding medieval architecture and fortified
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

							<br />
						</div>
					</div>
					<div className="column">
						<h2>Calgary, Canada</h2>
						<br />
						<div className="calgarycontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={cal}
								mapContainerClassName="map-container"
							>
								<MarkerF position={{ lat: 51.487, lng: -0.327 }} />
								<MarkerF position={cal} />
								<PolylineF
									path={calgaryPlanCoordinates}
									strokeColor="#FF0000"
									strokeOpacity={1.0}
									strokeWeight={2}
								/>
							</GoogleMap>
							<article className="calgary-article">
								At the edge of Kings Landing, there is a large body of water
								called Blackwater Bay. It houses Driftmark, a castle and home to
								House Velaryon. It previously featured in Game of Thrones during
								the Battle of the Blackwater. Lord Corlys Velaryon, also known
								as the Sea Snake, is a key character in House of the Dragon,
								sitting on the small council as Master of Ships. In reality,
								Driftmark is a medieval church dating back to the 12th century
								on St. Michael’s Mount, a rocky island housing a small community
								off the coast of Cornwall, linked to Marazion island by a tidal
								causeway.
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
					<div className="column">
						<h2>Canmore, Canada</h2>
						<br />
						<div className="canmorecontainer">
							<GoogleMap
								zoom={8}
								center={can}
								mapContainerClassName="map-container"
							>
								<MarkerF position={{ lat: 51.487, lng: -0.327 }} />
								<MarkerF position={can} />
								<PolylineF
									path={canmorePlanCoordinates}
									strokeColor="#FF0000"
									strokeOpacity={1.0}
									strokeWeight={2}
								/>
							</GoogleMap>
							<article className="canmore-article">
								HBO returned to Cáceres in Spain to film scenes for House of The
								Dragon, after the filming location was previously used in Game
								of Thrones it stood in for the Lannister stronghold, King's
								Landing, in season 7. The scenes in the streets of King's
								Landing from episodes eight and nine, "The Lord of the Tides"
								and "The Green Council", were filmed in Cáceres. The Dragonpit
								exterior was filmed at St. George's Square, removing San
								Francisco Javier church digitally.
								<div>
									<CardActions>
										<Button
											className="travellinks"
											size="large"
											color="primary"
											onClick={() => handleSearch("visitC")}
										>
											Visit The This Location
										</Button>
									</CardActions>
								</div>
							</article>
							<br />
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

export default TLOU;
