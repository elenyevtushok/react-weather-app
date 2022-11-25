import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props){

	let [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	useEffect(()=>{
		setLoaded(false);
	},[props.coordinates]);

	function handleResponse(response){
		setForecast(response.data.daily);
		setLoaded(true);
	}

	function load(){
		let apiKey = "6546to02e3f603be8f5087a1de413b3a";
		let longitude = props.coordinates.longitude;
		let latitude = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

		axios.get(apiUrl).then(handleResponse);
	}

	if(loaded){
		return (
			<div className="WeatherForecast">
				<div className="weather-forecast-all row">
					{forecast.map(function(dailyForecast,index){
						if(index<5){
						return(
						<div className="col-sm-2 weather-forecast-column" key={index}>
							<WeatherForecastDay data={dailyForecast} />
						</div>
						);
						}else{
							return null;
						}
					})}
				</div>
			</div>
		);
	}else{
		load();

		return null;
	}
}