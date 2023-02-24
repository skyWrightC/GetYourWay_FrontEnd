import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
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
		googleMapsApiKey: "",
	});
	const DomenicoPalace = useMemo(() => ({ lat: 37.8498, lng: 15.2834 }), []);
	const Wailea = useMemo(
		() => ({ lat: 20.862416178, lng: -156.482784134 }),
		[]
	);

	const [flightDuration, setFlightDuration] = useState("");
	const [weatherResponse, setWeatherResponse] = useState();

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
						<h2>San Domenico Palace, Taormina</h2>
						<br />
						<div className="Taorminacontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={DomenicoPalace}
								mapContainerClassName="map-container"
							>
								<MarkerF position={DomenicoPalace} />
							</GoogleMap>
							<article className="Taormina-article">
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
						<h2>Four Seasons Resort Maui at Wailea, Hawaii</h2>
						<br />
						<div className="waileacontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={Wailea}
								mapContainerClassName="map-container"
							>
								<MarkerF position={Wailea} />
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
