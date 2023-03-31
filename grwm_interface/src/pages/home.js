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
                            <Link to={"/signIn"}>Sign In</Link>
                        </li>
                        <li>
                            <Link to={"/quiz"}>Quiz</Link>
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