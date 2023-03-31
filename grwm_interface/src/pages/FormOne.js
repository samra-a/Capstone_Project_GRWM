import { useState } from "react";

const FormOne = ({}) => {
   
  // What type of occasion are you shopping for?
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
      <div className="occasions">
        <h2> 1. What Type of Occasion Are You Shopping For?</h2> 
        <form onSubmit={handleSubmit}></form>

      </div>
    );
  }
  
  export default FormOne;