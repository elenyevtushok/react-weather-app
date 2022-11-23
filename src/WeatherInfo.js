import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

export default function WeatherInfo(props){
	return (
		<div className = "WeatherInfo">
			<div className="today-weather">
				<div className="today-weather-image-temperature">
					<div className="today-weather-image">
						<WeatherIcon code={props.data.icon} alt={props.data.description} />
					</div>
					<div className="today-weather-temperature ">{Math.round(props.data.temperature)}<span className="today-weather-degrees">°C</span>
					</div>	
				</div>
				<h1 className="today-weather-city"><small><FontAwesomeIcon icon={faLocationDot} />{" "}</small>{props.data.city}</h1>
				<div className="today-weather-date"><FormattedDate date={props.data.date} /></div>
				<ul className="row today-weather-details justify-content-center">
					<li className="col-sm-4"><FontAwesomeIcon icon={faTemperatureHalf} />{" "}Feels like: {Math.round(props.data.feels_like)}°C</li>
					<li className="col-sm-4"><FontAwesomeIcon icon={faDroplet} />{" "}Humidity: {props.data.humidity}%</li>
					<li className="col-sm-4"><FontAwesomeIcon icon={faWind} />{" "}Wind: {props.data.wind}{" "}km/h</li>
				</ul>
			</div>
		</div>
	)
}
