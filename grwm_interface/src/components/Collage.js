
const Collage = ({ collage, deleteCollage, handleAddToCollageList, displayPreferenceButtons, displayRemoveButton, deleteCollageFromUser}) => {
    function importAll(files) {
        let images = {};
        files.keys().map((item) => { images[item.replace('./', '')] = files(item); });
        return images;
    }

    const handleRemoveClick = () => {
        deleteCollageFromUser(collage.id)
    }

    const pictures = importAll(require.context('../pictures', false, /\.(png|jpeg|svg)$/));
    return (
        <div className="collage-card">
            <img id="image" src={pictures[`${collage.name}.png`]} alt={collage.name} />
            <h4><strong>{collage.name}</strong></h4>
            <p><strong>Description: </strong>{collage.description}</p>
            {displayPreferenceButtons && 
                <> 
                    <button className="like" onClick={handleAddToCollageList}>LOVE IT!</button>
                    <button className="dislike" onClick={() => deleteCollage(collage.collageId)}>NEXT..</button> 
                </>}
            {displayRemoveButton &&
            <>
            <button onClick={handleRemoveClick}>DELETE</button>
            </>}

        </div>

    )
}
export default Collage;