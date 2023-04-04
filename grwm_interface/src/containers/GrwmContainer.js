import '../App.css';
import Home from '../pages/Home'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Register from '../pages/Register'
import SignIn from '../pages/SignIn'
import Quiz from '../pages/Quiz'
import FormOne from '../pages/FormOne';
import FinalCollage from '../pages/FinalCollage';
import UserAccount from '../pages/UserAccount';
import { useEffect, useState } from 'react';
import WeatherForm from '../pages/WeatherForm';
import StyleForm from '../pages/StyleForm';

const GrwmContainer = () => {

  const [error, setError] = useState("");
  const [collage, setCollage] = useState([]);
  const [collageList, setCollageList] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [collages, setCollages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [suggestedCollages, setSuggestedCollages] = useState([]);
  const [style, setStyle] = useState("");
  const [styles, setStyles] = useState([]);
  const [weather, setWeather] = useState("");
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    loadUsers();
    loadCollages();
  }, [])

  useEffect(() => {
    loadCategories(collages)
    loadStyles(collages)
    loadWeathers(collages)
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

  const loadStyles = async (collages) => {
    let foundStyles = new Set();
    collages.forEach((collage) => {
      foundStyles.add(collage.style)
    })
    setStyles([...foundStyles]);

  }

  const loadWeathers = async (collages) => {
    let foundWeathers = new Set();
    collages.forEach((collage) => {
      foundWeathers.add(collage.weather)
    })
    setWeathers([...foundWeathers]);

  }

  const submitPreferences = async () => {
    const response = await fetch(`http://localhost:8080/collages?category=${category}&style=${style}&weather=${weather}`)
    const data = await response.json()
    setSuggestedCollages(data);
  }

  const postCollageToUser = (collage) => {
    if (currentUser !== null) {
      fetch(`http://localhost:8080/users/${currentUser.id}/collages/${collage.id}`, {
          method: "POST",
          headers:
              { "Content-Type": "application/json" },
      })
          .then((response) => response.json())
          .then((response) => {
              setCollageList(response.collages);
          });
  }
};

  const router = createBrowserRouter([
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
          element: <SignIn setCurrentUser={setCurrentUser} users={users} collageList={collageList} />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/formOne",
          element: <FormOne categories={categories} category={category} setCategory={setCategory}/>,
        },
        {
          path: "/StyleForm",
          element: <StyleForm styles={styles} style={style} setStyle={setStyle}/>,
        },
        {
          path: "/WeatherForm",
          element: <WeatherForm weathers={weathers} weather={weather} setWeather={setWeather} submitPreferences={submitPreferences} />,
        },
        {
          path: "/finalCollage",
          element: <FinalCollage collages={suggestedCollages} submitPreferences={submitPreferences} setCollageList={setCollageList}
          postCollageToUser={postCollageToUser} 
          />,
        },
        {
          path: "/userAccount",
          element: <UserAccount users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} collageList={collageList} 
          setCollageList={setCollageList} collages={collages}/>
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
