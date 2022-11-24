import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){

	function handleResponse(response){
		console.log(response.data);
	}

	

	let apiKey = "6546to02e3f603be8f5087a1de413b3a";
	let longitude = props.coordinates.longitude;
	let latitude = props.coordinates.latitude;
	let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

	axios.get(apiUrl).then(handleResponse);

	return(
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="forecast-day">Friday</div>
					<WeatherIcon code="clear-sky-day" size = {45} />
					<div className="forecast-temperatures">
						<span className="forecast-temperature-min">12°</span>{" "}
						<span className="forecast-temperature-max">18°</span>
					</div>
				</div>
			</div>
		</div>
	);
}