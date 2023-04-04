import { useNavigate } from "react-router-dom";

const StyleForm = ({ styles, style, setStyle, submitPreferences}) => {
  const navigate = useNavigate()

  const handleStyleOptions = (e) => {
    setStyle(e.target.value);
  }

  const options = styles.map((style, index) => {
    return <option key={index} value={style}>{style.toLowerCase()}</option>
  })

  // string formatting

  // What type of occasion are you shopping for?

  return (
    <div className="Style">
      <h2> 3. What Best Describes Your Style?</h2>
      <select name="styleOptions" value={style} onChange={handleStyleOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={() => { navigate("/ColourForm")}}>Next Question</button>
    </div>
  );
}


export default StyleForm;