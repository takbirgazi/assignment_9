import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Five Star</title>
            </Helmet>
            <Slider></Slider>
            <div className="w-11/12 mx-auto py-10 flex flex-col gap-5">
                <h2 className="font-bold text-2xl text-center">ENJOY WORLD-CLASS STAY EXPERIENCE</h2>
                <div className="flex justify-center items-center">
                    <Cards></Cards>
                </div>
            </div>
        </div>
    );
};

export default Home;