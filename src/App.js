import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
		<div className='container'>
			<Weather defaultCity = "Lisbon" />
			<footer>
				  <div className="open-code">This project was coded by {" "}
					  <a href='https://www.linkedin.com/in/olena-yevtushok-1b95a2139/' rel="noreferrer" target="_blank"
					  >Olena Yevtushok</a> {" "} and is {" "}
					<a href='https://github.com/elenyevtushok/react-weather-app' rel="noreferrer" target="_blank"
					  >Open-sourced on GitHub</a>
				</div>
			</footer>
		</div>
    </div>
  );
}

