import CollageList from "../components/CollageList";


const FinalCollage = ({collages, submitPreferences}) => {

  

  
      return (
          <div className={`category ${submitPreferences}`}>
              <CollageList collages={collages}/>
              {submitPreferences}
          </div>
       );
  }
  // once the user gets to the last question, this will generate their final collage
  // replace with samras component
  
  export default FinalCollage;