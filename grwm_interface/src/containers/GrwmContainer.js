import "../App.css";
import Home from "../pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Quiz from "../pages/Quiz";
import FormOne from "../pages/FormOne";
import FinalCollage from "../pages/FinalCollage";
import UserAccount from "../pages/UserAccount";
import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import MeetTeam from "../components/MeetTeam";
import Hero from "../components/Hero";
import WeatherForm from '../pages/WeatherForm';
import StyleForm from '../pages/StyleForm';
import ColourForm from '../pages/ColourForm';

const GrwmContainer = () => {
  const [error, setError] = useState("");
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
  const [weatherTypes, setWeatherTypes] = useState([]);
  const [colour, setColour] = useState("");
  const [colours, setColours] = useState([]);

  useEffect(() => {
    loadUsers();
    loadCollages();
  }, []);

  useEffect(() => {
    loadCategories(collages)
    loadStyles(collages)
    loadWeatherTypes(collages)
    loadColours(collages)
  }, [collages])

  useEffect(() => {
    loadUserCollages()
  }, [currentUser])

  const loadUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    if (response.ok) {
      const data = await response.json();
      setUsers(data);
    } else {
      console.log(response);
      setError("404 - USERS NOT FOUND!");
    }
  };

  const loadCollages = async () => {
    const response = await fetch("http://localhost:8080/collages");
    if (response.ok) {
      const data = await response.json();
      setCollages(data);
    } else {
      console.log(response);
      setError("404 - COLLAGES NOT FOUND!");
    }
  };

  const loadCategories = async (collages) => {
    let foundCategories = new Set();
    collages.forEach((collage) => {
      foundCategories.add(collage.category);
    });
    setCategories([...foundCategories]);
  };

  const loadStyles = async (collages) => {
    let foundStyles = new Set();
    collages.forEach((collage) => {
      foundStyles.add(collage.style)
    })
    setStyles([...foundStyles]);

  }

  const loadWeatherTypes = async (collages) => {
    let foundWeatherTypes = new Set();
    collages.forEach((collage) => {
      foundWeatherTypes.add(collage.weather)
    })
    setWeatherTypes([...foundWeatherTypes]);

  }

  const loadColours = async (collages) => {
    let foundColours = new Set();
    collages.forEach((collage) => {
      foundColours.add(collage.colour)
    })
    setColours([...foundColours]);

  }

  const submitPreferences = async () => {
    const response = await fetch(`http://localhost:8080/collages?category=${category}&style=${style}&weather=${weather}&colour=${colour}`)
    const data = await response.json()
    setSuggestedCollages(data);
  };

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

  const deleteCollageFromUser = (id) => {
    fetch(`http://localhost:8080/users/${currentUser.id}/collage/${id}`, {
      method: "PUT",
    });

    const updatedCollageList = [...collageList]
    setCollageList(updatedCollageList.filter(collage => {
      return collage.id != id
    }));
  };

  const loadUserCollages = () => {
    if (currentUser !== null) {
  setCollageList(currentUser.collages)
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
          path: "/quiz",
          element: <Quiz />,
        },
        // {
        //   path: "/formOne",
        //   element: (
        //     <FormOne
        //       categories={categories}
        //       category={category}
        //       setCategory={setCategory}
        //       submitPreferences={submitPreferences}
        //     />
        //   ),
        // },
        // {
        //   path: "/finalCollage",
        //   element: (
        //     <FinalCollage
        //       collages={suggestedCollages}
        //       submitPreferences={submitPreferences}
        //       setCollageList={setCollageList}
        //       postCollageToUser={postCollageToUser}
        //     />
        //   ),
        // },
        // {
        //   path: "/userAccount",
        //   element: (
        //     <UserAccount
        //       users={users}
        //       currentUser={currentUser}
        //       setCurrentUser={setCurrentUser}
        //       collageList={collageList}
        //       setCollageList={setCollageList}
        //       collages={collages}
        //     />
        //   ),
        // },

        
        {
          path: "/about",
          element: <AboutSection />,
        },

        {
          path: "/",
          element: (
            <>
              <Hero/>
              <BlogSection />
              <MeetTeam />
            </>
          ),
        },
        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/",
          element: (
            <>
              <BlogSection />
              <MeetTeam />
            </>
          ),
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/formOne",      
          element: <FormOne categories={categories} category={category} setCategory={setCategory} />,
        },
        {
          path: "/styleForm",
          element: <StyleForm styles={styles} style={style} setStyle={setStyle} />,
        },
        {
          path: "/weatherForm",
          element: <WeatherForm weatherTypes={weatherTypes} weather={weather} setWeather={setWeather} />,
        },
        {
          path: "/colourForm",
          element: <ColourForm colours={colours} colour={colour} setColour={setColour} submitPreferences={submitPreferences} />,
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
            setCollageList={setCollageList} collages={collages} deleteCollageFromUser={deleteCollageFromUser} />
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {error !== "" && <p>{error}</p>}
    </>
  );
};

export default GrwmContainer;
