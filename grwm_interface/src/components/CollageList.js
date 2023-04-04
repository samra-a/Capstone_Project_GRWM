import Collage from "./Collage"

const CollageList = ({collages, deleteCollage, addToCollageList}) => {

    const collageComponents = collages.map((collage, index) => {
        return <Collage key={index} collage={collage} deleteCollage={deleteCollage} addToCollageList={addToCollageList}/>
    })
    return(
        <>{collageComponents}</>
    )
}
export default CollageList;