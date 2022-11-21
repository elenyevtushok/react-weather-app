import React from "react";
import "./Weather.css";

export default function Weather(){
	return( 
	<div className="Weather">
		<form>
			<div className="row">
				<div className="col-9">
					<input type="search" placeholder="Enter a city.." className="form-control" />
				</div>
				<div className="col-3">
					<input type = "submit" value="Search" className="btn btn-primary" />
				</div>
			</div>
		</form>
		<div>Right now in Kyiv it is mostly cloudy 
		</div>
		<div className="row">
			<div className="col-4">
				<img src="https://ssl.gstatic.com/onebox/weather/64/snow_s_cloudy.png" alt="Snow" />
			</div>
			<div className="col-4">
				<div className = "temperature">0°C</div>
			</div>
			<div className="col-4">
				<ul>
					<li>Precipitation: 95%</li>
					<li>Humidity: 97%</li>
					<li>Wind: 13 km/h</li>
				</ul>
			</div>
		</div>
	</div>
	)
}