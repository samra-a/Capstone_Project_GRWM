import { useNavigate } from "react-router-dom";

const WeatherForm = ({ weathers, weather, setWeather }) => {
  const navigate = useNavigate()

  const handleWeatherOptions = (e) => {
    setWeather(e.target.value);
  }

  const options = weathers.map((weather, index) => {
    return <option key={index} value={weather}>{weather.toLowerCase()}</option>
  })

  // string formatting

  // What type of occasion are you shopping for?

  return (
    <div className="Weather">
      <h2> 2. What Will The Weather Be Like for The Occasion You Are Dressing For?</h2>
      <select name="weatherOptions" value={weather} onChange={handleWeatherOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={() => { navigate("/StyleForm")}}>Next Question</button>
    </div>
  );
}

export default WeatherForm;