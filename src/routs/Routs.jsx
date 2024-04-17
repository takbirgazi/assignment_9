import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from '../pages/Login/Login';
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                loader: ()=> fetch(`data.json`),
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            }
        ]
    },
]);

export default router;
