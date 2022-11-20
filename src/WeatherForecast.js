import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecastData, setForecastData] = useState({ loaded: false });
	const [city, setCity] = useState(null);
	function handleResponse(response) {
		setForecastData(response.data.daily);
		setCity(response.data.city);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<div className="WeatherForecast-day">"Thu"</div>{" "}
						<div>
							<img src={""} alt="Forecast"></img>
						</div>{" "}
						<div className="WeatherForecast-temperatures">
							<span className="WeatherForecast-temp-max">
								{" "}
								{forecastData.temperature.maximum}
							</span>{" "}
							/{" "}
							<span className="WeatherForecast-temp-min">
								{forecastData.temperature.min}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "baac7b1cad0e7487be6feoe4t18f6423";
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
