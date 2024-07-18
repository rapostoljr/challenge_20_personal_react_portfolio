import GoatCommerce from "../assets/images/mainPage.jpg";
import Horisen from "../assets/images/horiseon.jpg";
import GoatTracker from "../assets/images/Tracker_pg1.png";
import WeatherApp from "../assets/images/weatherApp-search.png"

import '../App.css';

export default function WorksPage() {
    return (
        <section className="my-works">
            <h2>MY WORKS</h2>            
            <div className="work-items-container">
                <div className="work-item">
                    <a href="https://ojds2022.github.io/goat_calorie_tracker/" target="_blank">
                        <img src={GoatTracker} alt="Team Goat Calorie Tracker"/>
                        <p>Team Goat Calorie Tracker</p>
                    </a>
                </div>

                <div className="work-item">
                    <a href="https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products" target="_blank">
                        <img src={GoatCommerce} alt="Team GOAT E-Commerce"/>
                        <p>Team GOAT E-Commerce</p>
                    </a>
                </div>

                <div className="work-item">
                    <a href="https://rapostoljr.github.io/challenge_6_weather_forecast/" target="_blank">
                        <img src={WeatherApp} alt="Weather App"/>
                        <p>Weather App</p>
                    </a>
                </div>

                <div className="work-item">
                    <a href="https://boiling-bastion-87037-4394261bcf08.herokuapp.com/" target="_blank">
                        <img src={GoatCommerce} alt="Refactor GOAT E-COMMERCE to React"/>
                        <p>Refactor GOAT E-COMMERCE to React</p>
                    </a>
                </div>                
            </div>
        </section>
    )
}
