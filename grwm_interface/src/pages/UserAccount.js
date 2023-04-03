


const userAccount = (users, currentUser, setCurrentUser, collageList, setCollageList, postCollageToUser, collage) => {


    const handleClick = (e) => {
        console.log("This collage has successfully been added to your list!")
        postCollageToUser(collage.id)
    }

    return (  
        <div className="collagelist">
        
        </div>
    );
}
 
export default userAccount;