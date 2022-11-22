import React from "react";
import "./Weather.css";

export default function Weather(){
	return( 
		<div className="Weather container  align-self-center">
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
						<img src="https://ssl.gstatic.com/onebox/weather/64/snow_s_cloudy.png" alt="Snow" width="90px" />
					</div>
					<div className="col-3">
						
					<div className="today-weather-temperature ">13<span className="today-weather-degrees">°C</span></div>
						<h1 className="today-weather-city">Valencia</h1>
						
				</div>
			</div>
			
				<ul className="row today-weather-details justify-content-center">
					<li className="col-lg-4">Feels like: 15°C</li>
					<li className="col-lg-4">Humidity: 97%</li>
					<li className="col-lg-4">Wind: 13 km/h</li>
			</ul>
		</div>
	</div>
	)
}