import { useMemo, useState } from "react";
import {
	GoogleMap,
	useLoadScript,
	MarkerF,
	PolylineF,
} from "@react-google-maps/api";
import "./GoogleMaps.css";
import { Button, CardActions } from "@mui/material";
import axios from "axios";
import { SERVER_URL } from "../../constants";

// This is the actual component

//if maps !isLoaded(hasnt loaded) return Loading... else return the Map function

function HOTD() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "",
	});

	const [showDriveMessage, setShowDriveMessage] = useState(false);
	const [showTempMessage, setShowTempMessage] = useState(true);

	const kings = useMemo(() => ({ lat: 42.6507, lng: 18.0944 }), []);
	const drift = useMemo(() => ({ lat: 50.1172, lng: -5.4778 }), []);
	const pit = useMemo(() => ({ lat: 39.4753, lng: -6.3724 }), []);
	const flightPlanCoordinates = [
		{ lat: 42.6507, lng: 18.0944 },
		{ lat: 39.4753, lng: -6.3724 },
	];

	const [flightDuration, setFlightDuration] = useState("");
	const [weatherResponse, setWeatherResponse] = useState();

	let weatherUrl = "";

	const handleClick = () => {
		setFlightDuration("");
		setShowDriveMessage(true);
		setShowTempMessage(false);
	};

	const handleSearch = (dest) => {
		// The setIsLoading is set to true and displays message
		const token = sessionStorage.getItem("jwt");
		const url = SERVER_URL + "flight";
		let payload = {};
		// This data is taken from the states at the top of the page and submits as a JSON structure.
		switch (dest) {
			case "visitA":
				setShowDriveMessage(false);
				setShowTempMessage(true);
				weatherUrl = "weather/Croatia";
				payload = {
					departure: "LHR",
					destination: "DVB",
					date: "2023-03-01",
					adults: 1,
				};
				break;
			case "visitC":
				setShowDriveMessage(false);
				setShowTempMessage(true);
				weatherUrl = "weather/Spain";
				payload = {
					departure: "LHR",
					destination: "MAD",
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
					`The temperature is currently ${response.data.weather} degrees celcius`
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
						<h2>Kings Landing - Dubrovnik, Croatia</h2>
						<br />
						<div className="kingscontainer">
							<br />
							<GoogleMap
								zoom={13}
								center={kings}
								mapContainerClassName="map-container"
							>
								<PolylineF
									path={flightPlanCoordinates}
									strokeColor="#FF0000"
									strokeOpacity={1.0}
									strokeWeight={2}
								/>
								<MarkerF position={kings} />
							</GoogleMap>
							<article className="dubrovnik-article">
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
						</div>
					</div>
					<div className="column">
						<h2>Driftmark - St Michaels Mount, England</h2>
						<br />
						<div className="driftcontainer">
							<br />
							<GoogleMap
								zoom={13}
								center={drift}
								mapContainerClassName="map-container"
							>
								<MarkerF position={drift} />
							</GoogleMap>
							<article className="drift-article">
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
											onClick={handleClick}
										>
											Visit The This Location
										</Button>
									</CardActions>
								</div>
							</article>
						</div>
					</div>
					<div className="column">
						<h2>The DragonPit - Cáceres, Spain</h2>
						<br />
						<div className="pitcontainer">
							<br />
							<GoogleMap
								zoom={13}
								center={pit}
								mapContainerClassName="map-container"
							>
								<MarkerF position={pit} />
							</GoogleMap>
							<article className="pit-article">
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
						</div>
						<br />
					</div>
				</div>

				<div>
					{showDriveMessage && (
						<h2>
							The approximate travel time from Osterley, London to St Michaels
							Mount in Cornwall via the M4, M5 and A30 is 5 hours
						</h2>
					)}
					<h2 id="flight">{flightDuration}</h2>
					{showTempMessage && <h2 id="weather">{weatherResponse}</h2>}
				</div>
			</>
		);
	}
}

export default HOTD;
