import '../App.css';
import Home from '../pages/Home'
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import Quiz from '../pages/Quiz'
import Category from '../components/FilteredList';
import CollageList from '../components/CollageList';
import Collage from '../components/Collage';
import FormOne from '../pages/FormOne';
import FinalCollage from '../pages/FinalCollage';
import { useEffect, useState } from 'react';


const GrwmContainer = () => {

  const [error, setError] = useState("");
  const [collage, setCollage] = useState([]);
  const [collageList, setCollageList] = useState([]);
  const [listToUpdate, setListToUpdate] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [collages, setCollages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [occasion, setOccasion] = useState(""); //rename to category
  const [suggestedCollages, setSuggestedCollages] = useState([]);

  useEffect(() => {
    loadUsers();
    loadCollages();
  }, [])

  useEffect(() => {
    loadCategories(collages)
  }, [collages])

  const loadUsers = async () => {
    const response = await fetch("http://localhost:8080/users")
    if (response.ok){
      const data = await response.json() 
      setUsers(data);
    } else {
      console.log(response)
    setError("404 - USERS NOT FOUND!")
    };
  }

  const loadCollages = async () => {
    const response = await fetch("http://localhost:8080/collages")
    if (response.ok){
      const data = await response.json() 
      setCollages(data);
    } else {
      console.log(response)
    setError("404 - COLLAGES NOT FOUND!")
    };
  }


  const handleAddItemButtonClick = (collageListToUpdate) => {
    setCollageList(collageListToUpdate)
  }

  const loadCategories = async (collages) => {
    let foundCategories = new Set();
    collages.forEach((collage) => {
      foundCategories.add(collage.category)
    })
    setCategories([...foundCategories]);

  }

  const submitPreferences = async ()=> {
    const response = await fetch("http://localhost:8080/collages/category?category=" + occasion)
    const data = await response.json() 
    setSuggestedCollages(data);
    // fetch collages/categories and pass in the category based on the occasion state at the top
  }
  
  const groupByUserInput = ({submitPreferences}) => {
    return collages.filter((collage) => {
      return collage.Category === submitPreferences
    })
  }

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/formOne",
          element: <FormOne categories={categories} occasion={occasion} setOccasion={setOccasion} submitPreferences={submitPreferences} />,
        },
        {
          path: "/finalCollage",
          element: <FinalCollage collages={collages} submitPreferences={submitPreferences}
          />,
        }
      ]
    },
  ])

  return (
    // <div className="whole_container">
    // <RouterProvider router={router}/>
    // <div className="container_body">
    //     <div className="container_top">
    //       <div className="category_container">
    //         <Category category={"Wedding"} groupByUserInput={submitPreferences} handleAddItemButtonClick={handleAddItemButtonClick}/>
    //         <Category category={"Casual"} collageList={submitPreferences("CASUAL")} handleAddItemButtonClick={handleAddItemButtonClick} />
    //         <Category category={"Night-Out"} collageList={submitPreferences("NIGHT_OUT")} handleAddItemButtonClick={handleAddItemButtonClick} />
    //         <Category category={"Formal"} collageList={submitPreferences("FORMAL")} handleAddItemButtonClick={handleAddItemButtonClick} />
    //       </div>
    //     </div>
    //     </div>
    // </div>
    <>
    <RouterProvider router={router}/>
    
    {error !== "" && <p>{error}</p>}
    </>

    
  );
}

export default GrwmContainer;
