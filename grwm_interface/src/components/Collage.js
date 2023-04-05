

const Collage = ({ collage, deleteCollage, handleAddToCollageList, collageList}) => {
    function importAll(files) {
        let images = {};
        files.keys().map((item, index) => { images[item.replace('./', '')] = files(item); });
        return images;
    }
    
 
    const pictures = importAll(require.context('../pictures', false, /\.(png|jpeg|svg)$/));
    return (
        <div className="collage-card">
            <img id="image" src={pictures[`${collage.name}.png`]} alt={collage.name} />
            <h4><strong>Collage: </strong>{collage.name}</h4> 
            <p><strong>Description: </strong>{collage.description}</p>
            <p><strong>Category: </strong>{collage.category}</p>
            <p><strong>Style: </strong>{collage.style}</p>
            <p><strong>Weather: </strong>{collage.weather}</p>
            <p><strong>Colour Palette: </strong>{collage.colour}</p>
            <button className="like" onClick={handleAddToCollageList}>LOVE IT!</button>
            <button className="dislike" onClick={() => deleteCollage(collage.collageId)}>NEXT..</button>
        </div>

    )
    // rendering users collages, if this is true, don't show the buttons, if false (in the form) then render the buttons
}
export default Collage;