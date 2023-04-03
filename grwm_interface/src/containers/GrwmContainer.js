import '../App.css';
import Home from '../pages/Home'
import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import Quiz from '../pages/Quiz'
import FormOne from '../pages/FormOne';
import FinalCollage from '../pages/FinalCollage';
import { useEffect, useState } from 'react';


const GrwmContainer = () => {

  const [error, setError] = useState("");
  const [collage, setCollage] = useState([]);
  const [collageList, setCollageList] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [collages, setCollages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
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
    if (response.ok) {
      const data = await response.json()
      setUsers(data);
    } else {
      console.log(response)
      setError("404 - USERS NOT FOUND!")
    };
  }

  const loadCollages = async () => {
    const response = await fetch("http://localhost:8080/collages")
    if (response.ok) {
      const data = await response.json()
      setCollages(data);
    } else {
      console.log(response)
      setError("404 - COLLAGES NOT FOUND!")
    };
  }


  const loadCategories = async (collages) => {
    let foundCategories = new Set();
    collages.forEach((collage) => {
      foundCategories.add(collage.category)
    })
    setCategories([...foundCategories]);

  }

  const submitPreferences = async () => {
    const response = await fetch("http://localhost:8080/collages/category?category=" + category)
    const data = await response.json()
    setSuggestedCollages(data);
  }

  const postCollageToUser = (collageId) => {
    if (currentUser !== null) {
      fetch(`http://localhost:8080/users/${currentUser.id}/collages/${collage.id}`, {
          method: "POST",
          headers:
              { "Content-Type": "application/json" },
          body: JSON.stringify({
              user: { id: currentUser.id },
              collage: { id: collageId }
          })
      })
          .then((response) => response.json())
          .then((response) => {
              setCollageList([...collageList, response]);
          });
  }
};


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
          element: <FormOne categories={categories} category={category} setCategory={setCategory} submitPreferences={submitPreferences} />,
        },
        {
          path: "/finalCollage",
          element: <FinalCollage collages={suggestedCollages} submitPreferences={submitPreferences} setCollageList={setCollageList}
          postCollageToUser={postCollageToUser}
          />,
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />

      {error !== "" && <p>{error}</p>}
    </>


  );
}

export default GrwmContainer;
