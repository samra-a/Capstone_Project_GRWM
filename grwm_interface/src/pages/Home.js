import { Link, Outlet } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetTeam from "../components/MeetTeam";
import SubscribeForm from "../components/SubscribeForm";

const Home = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
                {/* <BlogSection />
                <MeetTeam /> */}
            </main>
            <footer>
                <SubscribeForm />
                <Footer />
            </footer>
        </>
    )

}

export default Home;