import { Link, Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Hero1 from "../components/Hero";

const Home = () => {

    return (
        <>
            <header>
                <h1></h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/register"}>Register</Link>
                        </li>
                        <li>
                            <Link to={"/signIn"}>Sign In</Link>
                        </li>
                        <li>
                            <Link to={"/quiz"}>Quiz</Link>
                        </li>
                        <li>
                            <Link to={"/formOne"}>Form One</Link>
                        </li>
                        <li>
                            <Link to={"/userAccount"}>Account</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
                <Hero/>
            </main>
        </>
    )

}

export default Home;