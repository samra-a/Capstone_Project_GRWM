import { useState } from "react";
import Collage from "../components/Collage";


  const FinalCollage = ({ collages, submitPreferences, postCollageToUser, collageList }) => {

    const [chosenIndex, setChosenIndex] = useState(0);
    const nextIndex = ()=> {
      if(chosenIndex + 1 < collages.length - 1) {
        setChosenIndex(chosenIndex+1);
      }
    }

    const handleAddToCollageList = (e) => {
      console.log("This collage has successfully been added to your list!")
      postCollageToUser(collages[chosenIndex]);
      nextIndex();
      // collageList.set()
  };

    console.log(collages);
    console.log(submitPreferences);

  
      return (
          <div className={`category ${submitPreferences}`}>
               {collages && collages.length > 0 && collages[chosenIndex].name ? <Collage deleteCollage={nextIndex} 
               handleAddToCollageList={handleAddToCollageList} collage={collages[chosenIndex]}/> : <></>}
               {/* {submitPreferences} */}
          </div>
       );
  }

  
  export default FinalCollage;