import { useNavigate } from "react-router-dom";
import colourIcon from "../pictures/colourIcon.png"

const ColourForm = ({ colours, colour, setColour, submitPreferences}) => {
  const navigate = useNavigate()

  const handleColourOptions = (e) => {
    setColour(e.target.value);
  }

  const options = colours.map((colour, index) => {
    return <option key={index} value={colour}>{colour.toLowerCase()}</option>
  })

  const handleClick = async () => {
    await submitPreferences();
    navigate("/finalCollage");
  }

  

  // What type of occasion are you shopping for?

  return (
    <div className="colour">
      <h2> 4. Which Option Roughly Describes Your Colour Palette? <img src={colourIcon} alt="" className="colourImg"/></h2>
      <select name="colourOptions" value={colour} onChange={handleColourOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={handleClick}>Generate Outfits</button>  
      <div className="picture1">
  </div>
    </div>
  );
}


export default ColourForm;