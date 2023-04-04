import { useNavigate } from "react-router-dom";

const StyleForm = ({ styles, style, setStyle}) => {
  const navigate = useNavigate()

  const handleStyleOptions = (e) => {
    setStyle(e.target.value);
  }

  const options = styles.map((style, index) => {
    return <option key={index} value={style}></option>
  })

  // string formatting

  // What type of occasion are you shopping for?

  return (
    <div className="Style">
      <h2> 1. What Best Describes Your Style?</h2>
      <select name="styleOptions" value={style} onChange={handleStyleOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={() => { navigate("/WeatherForm")}}>Next Question</button>
    </div>
  );
}

export default StyleForm;