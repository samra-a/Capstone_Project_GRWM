import CollageList from "../components/CollageList";
import { useEffect } from "react";


  const FinalCollage = ({ collages, submitPreference }) => {
    if (!submitPreference) {
      return null; // return null if submitPreference is falsy
    }
  
      return (
          <div className={`category ${submitPreference}`}>
              <CollageList collages={collages}/>
              {submitPreference}
          </div>
       );
  }
  // once the user gets to the last question, this will generate their final collage
  // replace with samras component
  
  export default FinalCollage;