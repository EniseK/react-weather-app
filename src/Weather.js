import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		console.log(response.data);

		setWeatherData({
			ready: true,
			temperature: response.data.temperature.current,
			date: new Date(response.data.time * 1000),
			wind: response.data.wind.speed,
			city: response.data.city,
			humidity: response.data.temperature.humidity,
			description: response.data.condition.description,
			iconUrl:
				"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Type city name..."
								className="form-control"
								autoFocus="on"
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>{" "}
						</div>
					</div>
				</form>
				<h1>Hannover</h1>
				<ul>
					<li>
						<FormattedDate date={weatherData.date} />
					</li>
					<li className="text-capitalize">{weatherData.description}</li>
				</ul>

				<div className="row mt-3">
					<div className="col-6">
						<span className="clearfix">
							<img
								src={weatherData.iconUrl}
								alt="Clear"
								className="float-left"
							></img>
							<span className="float-left">
								<span className="temp">
									{Math.round(weatherData.temperature)}
								</span>
								<span className="unit">°C</span>
							</span>
						</span>
					</div>
					<div className="col-6">
						<ul>
							<li>Humidity: {weatherData.humidity}%</li>
							<li>Wind: {weatherData.wind}km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "baac7b1cad0e7487be6feoe4t18f6423";
		let city = "Hannover";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}
