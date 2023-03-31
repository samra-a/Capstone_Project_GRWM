import '../App.css';
import Home from '../pages/home'
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter
} from "react-router-dom";
import Register from '../pages/register'
import SignIn from '../pages/signIn'
import Quiz from '../pages/quiz'
import { useState } from 'react';

const grwmContainer = () => {

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

export default grwmContainer;
