import FaqPage from "../components/faq";
import Navbar from "../components/navbar/navbar";
import Timeline from "../components/roadmap/roadmap";
import "../global.css"
const Roadmap = () => {
    return (
        <div>
            <Navbar/>
            <Timeline/>
            <FaqPage/>
        </div>
    )
}

export default Roadmap;