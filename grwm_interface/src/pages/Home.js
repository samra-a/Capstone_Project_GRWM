import { Link, Outlet } from "react-router-dom";

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
                            <Link to={"/formOne"}>Quiz</Link>
                        </li>
                        <li>
                            <Link to={"/userAccount"}>Account</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )

}

export default Home;