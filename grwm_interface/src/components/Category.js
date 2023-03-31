import CollageList from "./CollageList";

const Category = ({collages, category}) =>  {
    return (
        <div className={`category ${category}`}>
            <h2>{category}</h2>
            <CollageList collages={collages}/>
        </div>
     );
}
 
export default Category ;