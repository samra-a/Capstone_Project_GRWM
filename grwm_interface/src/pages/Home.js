import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubscribeForm from "../components/SubscribeForm";

const Home = () => {

    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet />
                
            </main>
            <footer>
                <SubscribeForm />
                <Footer />
            </footer>
        </>
    )

}

export default Home;