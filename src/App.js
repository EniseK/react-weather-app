import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<Weather defaultCity="Hannover" />
			<footer>
				This project was coded by{" "}
				<a
					href="https://classy-empanada-a7c461.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Enise Kizilaslan
				</a>{" "}
				and is {""}
				<a
					href="https://github.com/EniseK/react-weather-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					open sourced on GitHub.
				</a>
			</footer>
		</div>
	);
}
