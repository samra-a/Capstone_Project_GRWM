import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubscribeForm from "../components/SubscribeForm";

const Home = () => {

    return (
        <>
            <header>
                <Header/>
                <nav>
                    <ul>
                        {/* <li>
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
                        </li> */}
                    </ul>
                </nav>
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