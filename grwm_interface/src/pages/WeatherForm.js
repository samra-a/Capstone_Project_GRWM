import { useNavigate } from "react-router-dom";
import weatherIcon from "../pictures/weatherIcon.png"

const WeatherForm = ({ weatherTypes, weather, setWeather }) => {
  
  const navigate = useNavigate()

  const handleWeatherOptions = (e) => {
    setWeather(e.target.value);
  }

  const options = weatherTypes.map((weather, index) => {
    return <option key={index} value={weather}>{weather.toLowerCase()}</option>
  })

  // What type of occasion are you shopping for?

  return (
    <div className="weather">
      <h2> 2. What Will The Weather Be Like for The Occasion You Are Dressing For? <img src={weatherIcon} alt="" className="weatherImg"/></h2>
      <select name="weatherOptions" value={weather} onChange={handleWeatherOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={() => { navigate("/StyleForm")}}>Next Question</button>
    </div>
  );
}

export default WeatherForm;