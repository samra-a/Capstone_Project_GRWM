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

const GrwmContainer = () => {

  const [error, setError] = useState("");

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
    <RouterProvider router={router}/>
  );
}

export default GrwmContainer;
