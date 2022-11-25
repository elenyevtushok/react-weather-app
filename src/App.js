import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
		<div className='container'>
			<Weather defaultCity = "Lisbon" />
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
    </div>
  );
}

