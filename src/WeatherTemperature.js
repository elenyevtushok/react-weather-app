import React, { useState } from "react";

export default function WeatherTemperature(props){
		return(
			<div className="WeatherTemperature">
				<span className="today-weather-temperature ">{Math.round(props.celsius)}</span>	
				<span className="today-weather-unit">°C
				</span>
			</div>
		);
}