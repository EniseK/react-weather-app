import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecastData, setForecastData] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.city]);

	function handleResponse(response) {
		setForecastData(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecastData);
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col-2">
						<WeatherForecastDay data={forecastData[0]} />
					</div>
					<div className="col-2">
						<WeatherForecastDay data={forecastData[1]} />
					</div>
					<div className="col-2">
						<WeatherForecastDay data={forecastData[2]} />
					</div>
					<div className="col-2">
						<WeatherForecastDay data={forecastData[3]} />
					</div>
					<div className="col-2">
						<WeatherForecastDay data={forecastData[4]} />
					</div>
					<div className="col-2">
						<WeatherForecastDay data={forecastData[5]} />
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
