import Collage from "./Collage"

const CollageList = ({collages, deleteCollage, addToCollageList}) => {

    const collageComponents = collages.map(collage => {
        return <Collage key={collage.collageId} collage={collage} deleteCollage={deleteCollage} addToCollageList={addToCollageList}/>
    })
    return(
        <>{collageComponents}</>
    )
}
export default CollageList;