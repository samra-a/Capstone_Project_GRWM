import Collage from "./Collage"

const CollageList = ({collages, deleteCollage, addToColageList}) => {
    const collageComponents = collages.map(collage => {
        return <Collage key={collage.collageId} collage={collage} deleteCollage={deleteCollage} addToCollageList={addToCollageList}/>
    })
    return(
        <>{collageComponents}</>
    )
}
export default CollageList;