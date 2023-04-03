 import CollageList from "./CollageList";

 const FilteredList = ({submitPreferences}) => {
    const groupByUserInput = (submitPreferences) => {
        return CollageList.Category.filter((submitPreferences) => {
          return CollageList.Category === submitPreferences
        })
      }

    return ( 
        <>
        {groupByUserInput}
        </>
     );
 }
  
 export default FilteredList;
