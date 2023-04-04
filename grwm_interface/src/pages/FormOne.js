import { useNavigate } from "react-router-dom";

const FormOne = ({ categories, category, setCategory}) => {
  const navigate = useNavigate()

  const handleCategoryOptions = (e) => {
    setCategory(e.target.value);
  }

  const options = categories.map((category, index) => {
    return <option key={index} value={category}>{category.toLowerCase()}</option>
  })

  // string formatting

  // What type of occasion are you shopping for?

  return (
    <div className="Occasion">
      <h2> 1. What Type of Occasion Are You Shopping For?</h2>
      <select name="categoryOptions" value={category} onChange={handleCategoryOptions}>
        <option>Choose an option</option>
        {options}
      </select>
      <button onClick={() => { navigate("/WeatherForm")}}>Next Question</button>
    </div>
  );
}

export default FormOne;