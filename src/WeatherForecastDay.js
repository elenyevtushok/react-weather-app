import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

	function maxTemperature(){
		let temperature = Math.round(props.data.temperature.maximum);
		return `${temperature}°`;
	}
	function minTemperature() {
		let temperature = Math.round(props.data.temperature.minimum);
		return `${temperature}°`;
	}

	function day(){
		let date = new Date(props.data.time*1000);
		let day = date.getDay();

		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuersday", "Friday", "Saturday"];

		return days[day];
	}
	return(
		<div>
			<div className="forecast-day">{day()}</div>
			<WeatherIcon code={props.data.condition.icon} size={45} />
			<div className="forecast-temperatures">
				<span className="forecast-temperature-min">{minTemperature()}</span>{" "}
				<span className="forecast-temperature-max">{maxTemperature()}</span>
			</div>
		</div>
	)
}