import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Five Star</title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;