import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){

	let [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function handleResponse(response){
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if(loaded){
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<WeatherForecastDay data = {forecast[0]} />
					</div>
				</div>
			</div>
		);
	}else{
		let apiKey = "6546to02e3f603be8f5087a1de413b3a";
		let longitude = props.coordinates.longitude;
		let latitude = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}