import React, { useState } from "react";
import "./whetherApp.css";
import searchimg from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const WhetherApp = () => {
  let apiKey = "997a93b1a77a44dab3a22cb5f8a2733c";

  const [wicon, setwicon] = useState(cloud);

  const search = async () => {
    const element = document.getElementsByClassName("cityName");

    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("whether-temp");
    const location = document.getElementsByClassName("whether-location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/h";
    temprature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;

    if (data.whether[0].icon === "01d" && data.whether[0].icon === "01n") {
      setwicon(clear);
    } else if (
      data.whether[0].icon === "02d" &&
      data.whether[0].icon === "02n"
    ) {
      setwicon(cloud);
    } else if (
      data.whether[0].icon === "03d" &&
      data.whether[0].icon === "03n"
    ) {
      setwicon(drizzle);
    } else if (
      data.whether[0].icon === "04d" &&
      data.whether[0].icon === "04n"
    ) {
      setwicon(drizzle);
    } else if (
      data.whether[0].icon === "09d" &&
      data.whether[0].icon === "09n"
    ) {
      setwicon(rain);
    } else if (
      data.whether[0].icon === "10d" &&
      data.whether[0].icon === "10n"
    ) {
      setwicon(rain);
    } else if (
      data.whether[0].icon === "13d" &&
      data.whether[0].icon === "13n"
    ) {
      setwicon(snow);
    } else {
      setwicon(clear);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="top-bar">
            <form action="">
              <input type="text" className="cityName" placeholder="Search" />
            </form>
            <div
              className="search-icon"
              onClick={() => {
                search();
              }}
            >
              <img src={searchimg} alt="" />
            </div>
          </div>

          <div className="whether-image">
            <img src={cloud} alt="" />
          </div>

          <div className="whether-temp"> 24C</div>
          <div className="whether-location"> lohore</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity} className="icon" alt="" />
              <div className="data">
                <div className="humidity-percentage">24%</div>
                <div className="text">humidity</div>
              </div>
            </div>

            <div className="element">
              <img src={wind} className="icon" alt="" />
              <div className="data">
                <div className="wind-rate">18 km pr hour</div>
                <div className="text">Wind speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhetherApp;
