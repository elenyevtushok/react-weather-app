import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
		<div className='container'>
			<Weather />
			<footer>
				<p>
					<a href='https://github.com/elenyevtushok/react-weather-app' rel="noreferrer" target="_blank"
					>Open-source code</a>
				</p>
				<p>Built by Olena Yevtushok</p>
			</footer>
		</div>
    </div>
  );
}

