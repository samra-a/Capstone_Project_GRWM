import CollageList from "../components/CollageList";
import { useNavigate } from "react-router-dom";

const UserAccount = ({users, currentUser, setCurrentUser, collageList, setCollageList, collages, deleteCollageFromUser}) => {

    const navigate = useNavigate()
    
    const handleLogIn = (e) => {
        //find the user to log in
        const userToLogIn = users.filter(user => user.id == e.target.value);
        setCurrentUser(userToLogIn[0]);
        //get collage Ids
        const userCollagesIds = collageList.map((collage) => {
            if (collage.user.id == e.target.value) {
                return collage.id
            }
        })

        //retrieve a collage once from the collages array
        const userCollages = collages.filter((collage) => { return userCollagesIds.includes(collage.id) })
        setCollageList(userCollages)
    }

    //mapping through the users in the dataloader
    const userOptions = users.map((user) => {
        return (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })

    if (currentUser === null) {
        return (
            <div className="signIn">
                <div>
                <h1>Sign In</h1>
                <p>Please select a user to sign in: </p>
                <select
                    onChange={handleLogIn}
                    name="Users">
                    <option value="select user">Select a user</option>
                    {userOptions}
                </select>
                </div>
            </div>
        );
    } else {
        return (
            <div className="myAccount">
                <div className="accountInfo">
                <h1>My Account</h1>
                <h2>
                    Hello {currentUser.name}!
                </h2>
                <div className="myAccountHeadings">
                <div>
                    Add New Collage to List:
                    <button className="addCollage" onClick={() => { navigate("/formOne")}}> Add Collage </button>
                </div>
                </div>
                </div>
                <div className="accountTitle">
                    <h2>My Collage List</h2>
                </div>
                <CollageList
                    collages={collageList}
                    currentUser={currentUser}
                    deleteCollageFromUser={deleteCollageFromUser}
                />
            </div>
        );
    }

}
   
 
export default UserAccount;