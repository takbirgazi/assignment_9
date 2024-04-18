import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouts = ({children}) => {
    const {user, loading }= useContext(AuthContext);

    if(loading){
        return(
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRouts;