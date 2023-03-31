import { useState } from "react";
import { NavLink } from "react-router-dom";

const FormOne = ({}) => {
   
  // What type of occasion are you shopping for?
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
      <div className="occasions">
        <h2> 1. What Type of Occasion Are You Shopping For?</h2> 
        <select name="OccasionOptions">
                        <option>Choose an option</option>
                        <option> <NavLink to="/formTwo" value="WEDDING">Wedding</NavLink></option>
                        <option value="CASUAL">Casual</option>
                        <option value="FORMAL">Formal</option>
                        <option value="NIGHT_OUT">Night Out</option>
                    </select>
      </div>
    );
  }
  
  export default FormOne;