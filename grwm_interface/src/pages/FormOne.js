import { useNavigate } from "react-router-dom";
import { useState } from "react";


const FormOne = ({ categories, category, setCategory, submitPreferences }) => {
  const navigate = useNavigate()

  const handleOccasionOptions = (e) => {
    setCategory(e.target.value);
  }

  const options = categories.map((category, index) => {
    return <option key={index} value={category}>{category.toLowerCase()}</option>
  })

  // string formatting

  // What type of occasion are you shopping for?

  const handleClick = async () => {
    await submitPreferences();
    navigate("/finalCollage");
  }

  return (
    <div className="occasions">
      <h2> 1. What Type of Occasion Are You Shopping For?</h2>
      <select name="OccasionOptions" value={category} onChange={handleOccasionOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={handleClick}>Next Question</button>  
      {/* final form will use the above line with submit preferences and can naviagate to another page */}
      {/* <button onClick={() => { navigate("/formTwo")}}>Next Question</button> */}
    </div>
  );
}

export default FormOne;