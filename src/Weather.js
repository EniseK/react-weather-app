import React from "react";
import "./Weather.css";

export default function Weather() {
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
				<li>Monday 13:00</li>
				<li>Cloudy</li>
			</ul>

			<div className="row mt-3">
				<div className="col-6">
					<span className="clearfix">
						<img
							src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
							alt="Cloudy"
							className="float-left"
						></img>
						<span className="float-left">
							<span className="temperature">14</span>
							<span className="unit">°C</span>
						</span>
					</span>
				</div>
				<div className="col-6">
					<ul>
						<li>Precipitation: 7%</li>
						<li>Humidity: 69%</li>
						<li>Wind: 16 km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
