import Collage from "./Collage"

const CollageList = ({collages, deleteCollage, addToCollageList, deleteCollageFromUser}) => {

    const collageComponents = collages.map((collage, index) => {
        return <Collage key={index} collage={collage} deleteCollage={deleteCollage} addToCollageList={addToCollageList}
        deleteCollageFromUser={deleteCollageFromUser} displayRemoveButton={true}/>
    })
    return(
        <>{collageComponents}</>
    )
}
export default CollageList;