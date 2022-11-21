import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecastData, setForecastData] = useState({ loaded: false });
	function handleResponse(response) {
		setForecastData(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		function day() {
			let date = new Date(forecastData[0].time * 1000);
			let day = date.getDay();
			let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			return days[day];
		}

		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<div className="WeatherForecast-day">{day()}</div>{" "}
						<div>
							<img src={""} alt="Forecast">
								src=
								{`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecastData[0].condition.icon}.png`}
							</img>
						</div>{" "}
						<div className="WeatherForecast-temperatures">
							<span className="WeatherForecast-temp-max">
								{" "}
								{Math.round(forecastData[0].temperature.maximum)}°
							</span>{" "}
							/{" "}
							<span className="WeatherForecast-temp-min">
								{Math.round(forecastData[0].temperature.min)}°
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "baac7b1cad0e7487be6feoe4t18f6423";
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
