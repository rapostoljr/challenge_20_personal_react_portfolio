import GoatCommerce from "../assets/images/mainPage.jpg";
import Horisen from "../assets/images/horiseon.jpg";
import GoatTracker from "../assets/images/Tracker_pg1.png";
import WeatherApp from "../assets/images/weatherApp-search.png"

import '../App.css';

export default function WorksPage() {
    return (
    <section className="my-works">
        <h2>MY WORKS</h2>
        <p>
            <a href="https://ojds2022.github.io/goat_calorie_tracker/" target="_blank"><img src={GoatTracker} alt="Team Goat Calorie Tracker"/></a>
            <a href="https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products" target="_blank"><img src={GoatCommerce} alt="Team GOAT E-Commerce"/></a>
            <a href="https://rapostoljr.github.io/challenge_1_code_refactor_for_horiseon_website/" target="_blank"><img src={Horisen} alt="Refactor HTML/CSS for Horiseon"/></a>
            <a href="https://rapostoljr.github.io/challenge_6_weather_forecast/" target="_blank"><img src={WeatherApp} alt="Weather App"/></a>
        </p>
    </section>
    )
}
