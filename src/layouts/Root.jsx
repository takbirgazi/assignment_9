import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
    return (
       <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
       </div>
    );
};

export default Root;