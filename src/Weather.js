import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

import { Rings } from 'react-loader-spinner';

export default function Weather(props){
	const [weatherData, setWeatherData] = useState({ready:false});
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response){
		setWeatherData({
			ready: true,
			coordinates: response.data.coordinates,
			temperature: response.data.temperature.current,
			feels_like: response.data.temperature.feels_like,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			city: response.data.city,
			country: response.data.country,
			icon: response.data.condition.icon,
			description: response.data.condition.description,
			date: new Date(response.data.time*1000),
		});
	}

	function search(){
		let apiKey = "4f6e636etc17733b801df4o7b14ba35b";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event){
		event.preventDefault();
		search();
	}

	function handleCityChange(event){
		setCity(event.target.value);
	}

	if(weatherData.ready){
	return( 
		<div className="Weather container">
			<form onSubmit={handleSubmit}>
				<div className="row justify-content-center">
					<div className="input-group col-9 ">
						<input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" aria-describedby="basic-addon2" onChange={handleCityChange} />
						<div className="input-group-append">
							<input className="btn btn-outline-secondary" type="submit" value="Search" />
						</div>
					</div>
				</div>
			</form>
			<WeatherInfo data = {weatherData} />
			<WeatherForecast coordinates={weatherData.coordinates} />
			<footer>
				<div className="open-code">
					<a href='https://github.com/elenyevtushok/react-weather-app' rel="noreferrer" target="_blank"
					>Open-source code</a>
					,{" "}by {" "}
					<a href='https://fancy-palmier-f557aa.netlify.app/' rel="noreferrer" target="_blank"
					>Olena Yevtushok</a>
				</div>
			</footer>
		</div>
	);
	}else{
		search();
		return(
			<Rings
				height="90"
				width="90"
				color="#00ff9d"
				radius="50"
				wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
				wrapperClass=""
				visible={true}
				ariaLabel="rings-loading"
			/>
		)
	}
}