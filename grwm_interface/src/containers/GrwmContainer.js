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
import FormOne from '../pages/FormOne';
import { useEffect, useState } from 'react';

const GrwmContainer = () => {

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [collages, setCollages] = useState([]);

  useEffect(() => {
    loadUsers();
    loadCollages();
  }, [])

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
          element: <FormOne />,
        }
      ]
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    {error !== "" && <p>{error}</p>}
    </>

    
  );
}

export default GrwmContainer;
