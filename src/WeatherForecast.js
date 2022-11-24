import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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