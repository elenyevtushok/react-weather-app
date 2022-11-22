import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

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
			<div className="today-weather">
			<div className="row justify-content-center">
				<div className="col-2 today-weather-image align-self-center">
						<img src={weatherData.iconUrl} alt={weatherData.description} width="100px" />
					</div>
					<div className="col-3">
						
						<div className="today-weather-temperature ">{Math.round(weatherData.temperature)}<span className="today-weather-degrees">°C</span></div>
					
						
				</div>

					<h1 className="today-weather-city"><small><FontAwesomeIcon icon={faLocationDot} />{" "}</small>{weatherData.city}</h1>
					<p className="today-weather-date"><FormattedDate date={weatherData.date} /></p>
			</div>
			
				<ul className="row today-weather-details justify-content-center">
					<li className="col-sm-4"><FontAwesomeIcon icon={faTemperatureHalf} />{" "}Feels like: {Math.round(weatherData.feels_like)}°C</li>
					<li className="col-sm-4"><FontAwesomeIcon icon={faDroplet} />{" "}Humidity: {weatherData.humidity}%</li>
					<li className="col-sm-4"><FontAwesomeIcon icon={faWind} />{" "}Wind: {weatherData.wind}{" "}km/h</li>
			</ul>
		</div>
	</div>
	);
	}else{
		let apiKey = "6546to02e3f603be8f5087a1de413b3a";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=6546to02e3f603be8f5087a1de413b3a&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading";
	}
}