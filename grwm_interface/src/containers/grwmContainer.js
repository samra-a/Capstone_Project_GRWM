import './App.css';
import Home from './components/home'
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter
} from "react-router-dom";
import Register from './components/signUpForm'
import SignIn from './components/signInForm'
import Quiz from './components/quizForm'

function App() {

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
          loader: loadCountries
        },
        {
          path: "/signIn",
          element: <SignIn />,
          loader: loadCountries
        },
        {
          path: "/quiz",
          element: <Quiz />,
          loader: loadCountries
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
