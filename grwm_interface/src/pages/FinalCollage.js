import CollageList from "../components/CollageList";
import { useEffect, useState } from "react";
import Collage from "../components/Collage";


  const FinalCollage = ({ collages, submitPreferences }) => {
    const [chosenIndex, setChosenIndex] = useState(0);
    const nextIndex = ()=> {
      if(chosenIndex + 1 < collages.length - 1) {
        setChosenIndex(chosenIndex+1);
      }
    }

    console.log(collages);
    console.log(submitPreferences);
    // if (!submitPreferences) {
    //   return null; // return null if submitPreference is falsy
    // }


    // //create a new array for the filtered collages 
    // const filteredCollages = collages.filter(collage => collage.category === submitPreferences);
  
      return (
          <div className={`category ${submitPreferences}`}>
              {/* <CollageList collages={collages.filter(collage => collage.category === submitPreferences)}/> */}
               {collages && collages.length > 0 && collages[chosenIndex].name ? <Collage deleteCollage={nextIndex} collage={collages[chosenIndex]}/> : <></>}
               {submitPreferences}
          </div>
       );
  }
  // once the user gets to the last question, this will generate their final collage
  // replace with samras component
  
  export default FinalCollage;