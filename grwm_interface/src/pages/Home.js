import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubscribeForm from "../components/SubscribeForm";

const Home = () => {

    return (
        <>
            <header>
                {/* <nav>
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
                            <Link to={"/finalCollage"}>Final Collage</Link>
                        </li>

                    </ul>
                </nav> */}
                <Header/>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <SubscribeForm/>
                <Footer/>
            </footer>
        </>
    )

}

export default Home;