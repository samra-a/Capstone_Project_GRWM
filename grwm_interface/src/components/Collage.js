const Collage = ({ collage, deleteCollage, handleAddToCollageList }) => {
    function importAll(files) {
        let images = {};
        files.keys().map((item, index) => { images[item.replace('./', '')] = files(item); });
        return images;
    }
    
 
    const pics = importAll(require.context('../pictures', false, /\.(png|jpeg|svg)$/));
    return (
        <div className="collage-card">
            <img id="image" src={pics[`${collage.name}.jpeg`]} alt={collage.name} />
            <h4><strong>Collage: </strong>{collage.name}</h4>
            <p><strong>Description: </strong>{collage.description}</p>
            <p><strong>Category: </strong>{collage.category}</p>
            <button className="like" onClick={handleAddToCollageList}>LOVE IT!</button>
            <button className="dislike" onClick={() => deleteCollage(collage.collageId)}>NEXT..</button>
        </div>
    )
}
export default Collage;