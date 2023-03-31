import '../App.css';
import Home from '../pages/Home'
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter
} from "react-router-dom";
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import Quiz from '../pages/Quiz'
import { useState } from 'react';
import Category from '../components/Category';
import CollageList from '../components/CollageList';
import Collage from '../components/Collage';


const GrwmContainer = () => {

  const [error, setError] = useState("");
  const [collage, setCollage] = useState(null);
  const [collageList, setCollageList] = useState([]);
  const [listToUpdate, setListToUpdate] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://localhost:8080/users")
    const data = await response.json()
    .catch((err) => setError(err.message));
    return data;
  }

  const loadCollages = async () => {
    const response = await fetch("https://localhost:8080/collages")
    const data = await response.json()
    .catch((err) => setError(err.message));
    return data;
  }

  const filtercollagesByCategory = (collage) => {
    fetch(`http://localhost:8080/collages/${collage.category}`)
      .then((response) => response.json())
      .then((response) => setCollageList(response))
  }

  const handleAddItemButtonClick = (collageListToUpdate) => {
    setCollageList(collageListToUpdate)
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
        }
      ]
    },
  ])

  if (error !== "") return <p>Error! {error}</p>;

  return (
    <div className="whole_container">
    <RouterProvider router={router}/>
    <div className="container_body">
        <div className="container_top">
          <div className="category_container">
            <Category category={"Wedding"} collageList={filtercollagesByCategory("WEDDING")} handleAddItemButtonClick={handleAddItemButtonClick}/>
            <Category category={"Casual"} collageList={filtercollagesByCategory("CASUAL")} handleAddItemButtonClick={handleAddItemButtonClick} />
            <Category category={"Night-Out"} collageList={filtercollagesByCategory("NIGHT_OUT")} handleAddItemButtonClick={handleAddItemButtonClick} />
            <Category category={"Formal"} collageList={filtercollagesByCategory("FORMAL")} handleAddItemButtonClick={handleAddItemButtonClick} />
            <Category category={"StreetWear"} collageList={filtercollagesByCategory("STREETWEAR")} handleAddItemButtonClick={handleAddItemButtonClick} />
          </div>
        </div>
        </div>
    </div>
  );
}

export default GrwmContainer;
