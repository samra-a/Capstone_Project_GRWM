import { useNavigate } from "react-router-dom";
import fashion from "../pictures/fashion.png"

const StyleForm = ({ styles, style, setStyle}) => {
  const navigate = useNavigate()

  const handleStyleOptions = (e) => {
    setStyle(e.target.value);
  }

  const options = styles.map((style, index) => {
    return <option key={index} value={style}>{style.toLowerCase()}</option>
  })

  // What type of occasion are you shopping for?

  return (
    <div className="style">
      <h2> 3. Which Option Best Describes Your Style? <img src={fashion} alt="" className="styleImg"/></h2>
      <select name="styleOptions" value={style} onChange={handleStyleOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={() => { navigate("/ColourForm")}}>Next Question</button>
    </div>
  );
}


export default StyleForm;