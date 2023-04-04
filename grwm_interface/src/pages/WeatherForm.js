import { useNavigate } from "react-router-dom";

const WeatherForm = ({ weathers, weather, setWeather, submitPreferences }) => {
  const navigate = useNavigate()

  const handleWeatherOptions = (e) => {
    setWeather(e.target.value);
  }

  const options = weathers.map((weather, index) => {
    return <option key={index} value={weather}>{weather.toLowerCase()}</option>
  })

  // string formatting

  // What type of occasion are you shopping for?

  const handleClick = async () => {
    await submitPreferences();
    navigate("/finalCollage");
  }

  return (
    <div className="Weather">
      <h2> 1. What Will The Weather Be Like?</h2>
      <select name="weatherOptions" value={weather} onChange={handleWeatherOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={handleClick}>Generate Outfits</button>  
    </div>
  );
}

export default WeatherForm;