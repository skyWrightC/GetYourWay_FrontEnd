import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./TLOU.css";
import { Button, CardActions } from "@mui/material";
import axios from "axios";
import { SERVER_URL } from "../../constants";

// }

function TLOU() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "",
	});
	const ed = useMemo(() => ({ lat: 53.5461, lng: 113.4937 }), []);
	const cal = useMemo(() => ({ lat: 50.1172, lng: 114.0719 }), []);
	const can = useMemo(() => ({ lat: 51.0899, lng: 115.3441 }), []);

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
						<h2>Edmonton, Canada</h2>
						<br/>
						<div className="edmontoncontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={ed}
								mapContainerClassName="map-container"
							>
								<MarkerF position={ed} />
							</GoogleMap>
							<article className="edmonton-article">
							Another city in Alberta where filming took place was Edmonton.
							The skyline of this western Canadian city stands out from the <span class="bolded"> vast
							wilderness and natural areas surrounding it.</span> It’s the perfect backdrop
							for a series that highlights the major cities in the United States,
							deserted by humans, where nature has once again taken over. Downtown
							Edmonton and the Legislative Assembly of Alberta building both appear
							on screen in The Last of Us.
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
						
						<div className="calgarycontainer">
							<br />
							<GoogleMap
								zoom={8}
								center={cal}
								mapContainerClassName="map-container"
							>
								<MarkerF position={cal} />
							</GoogleMap>
							<article className="calgary-article">
							The province of Alberta is also home to the city of Calgary, which inspired the show’s production team.
							Calgary’s city centre was one of the settings for The Last of Us, where the crew filmed at <span class="bolded"> Mount Royal
							University, the Southern Alberta Institute of Technology and the Northland Village Mall. </span> Viewers will
							also recognise the city’s courthouse. Several neighbourhoods were transformed and used for filming as well,
							including the Beltline district, home to Stampede Park, and the Victoria Park district.
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
								<MarkerF position={can} />
							</GoogleMap>
							<article className="canmore-article">
							Just west of Calgary is Canmore, a town that was used to portray Jackson, Wyoming.
							<span class="bolded">The snowy mountains of Waterton Lakes National Park were used for hiking sequences
							in Colorado.</span> Other pivotal scenes in the show were filmed in Calgary’s Northland Village Mall,
							Mount Royal University, and Southern Alberta Institute of Technology, Decider reports.
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
