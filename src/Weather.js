import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props){
	const [weatherData, setWeatherData] = useState({ready:false});

	function handleResponse(response){
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.temperature.current,
			feels_like: response.data.temperature.feels_like,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			city: response.data.city,
			iconUrl: response.data.condition.icon_url,
			description: response.data.condition.description,
			date: new Date(response.data.time*1000),
		});
	}

	if(weatherData.ready){
	return( 
		<div className="Weather container align-self-center">
			<form>
				<div className="row justify-content-center">
					<div className="col-9 ">
						<input type="search" placeholder="Enter a city.." className="form-control" />
					</div>
					<div className="col-3">
						<input type = "submit" value="Search" className="btn btn-primary w-100" autoFocus="on" />
					</div>
				</div>
			</form>
			<WeatherInfo data = {weatherData} />
		</div>
	);
	}else{
		let apiKey = "6546to02e3f603be8f5087a1de413b3a";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=6546to02e3f603be8f5087a1de413b3a&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading";
	}
}