const Collage = ({ collage, deleteCollage, addToCollageList }) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const handleAddToCollageList = () => {
        addToCollageList(collage);
    };

    const pics = importAll(require.context('../pictures', false, /\.(png|jpeg|svg)$/));
    return (
        <div className="collage-card">
            <img id="image" src={pics[`${collage.name}.jpeg`]} alt={collage.name} />
            <h4><strong>Collage: </strong>{collage.name}</h4>
            <p><strong>Description: £</strong>{collage.description}</p>
            <p><strong>Category: </strong>{collage.category}</p>
            <button className="like" onClick={handleAddToCollageList}>LOVE IT!</button>
            <button className="dislike" onClick={() => deleteCollage(collage.collageId)}>NEXT..</button>
        </div>
    )
}
export default Collage;