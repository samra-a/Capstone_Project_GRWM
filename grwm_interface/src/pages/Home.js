import { Link, Outlet } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetTeam from "../components/MeetTeam";
import SubscribeForm from "../components/SubscribeForm";
import Hero from "../components/Hero";
import Hero1 from "../components/Hero";

const Home = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
                <Hero/>
            </main>
            <footer>
                <SubscribeForm />
                <Footer />
            </footer>
        </>
    )

}

export default Home;