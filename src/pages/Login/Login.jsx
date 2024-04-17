import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import {signInWithPopup} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const providerGoogle = new GoogleAuthProvider();
    const providerGit = new GithubAuthProvider();
    const [showPwd, setShowPwd] = useState(false);

    const eyeHandler =()=>{
        setShowPwd(!showPwd);
    }
    
    const signInWithGoogleHandler =()=>{
        signInWithPopup(auth,providerGoogle)
        .then(()=>{
            toast("Log In Successfully!");
            navigate("/");navigate("/");
        })
        .catch(err=>{
            console.error(err.message);
            toast(err.message);
        })
    }
    const siggnInWithFb = ()=>{
        signInWithPopup(auth, providerGit)
        .then(()=>{
            toast("Log In Successfully!");
            navigate("/");
        })
        .catch(err=>{
            console.error(err.message);
            toast(err.message);
        })
    }

    const logInWithEmPwd = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const pwd = event.target.password.value;
        logIn(email,pwd)
        .then(()=>{
            navigate("/");
        })
        .catch(err=>{
            toast(err.message);
        })
        
    }
    return (
        <div>
            <Helmet>
                <title>Log In - Five Star</title>
            </Helmet>
            <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
                <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                    <h2 className="font-bold text-xl text-center">Log In</h2>
                    <form onSubmit={logInWithEmPwd} className="flex gap-5 flex-col pt-10">
                        <div className="flex items-center justify-center">
                            <input name="email" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="email" placeholder="Write Your Email"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative flex flex-col lg:w-1/2 w-full mx-auto">
                                <input name="password" className="border rounded-sm p-2" type={showPwd ? "text" : "password"}placeholder="Your Password" required/>
                                <span onClick={eyeHandler} className="absolute right-2 top-3 cursor-pointer">
                                    {showPwd ? <FaEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <input className="border bg-blue-500 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto cursor-pointer" type="submit" value="Log In"/>
                        </div>

                        <div className="flex items-center justify-center">
                        <p>If you want to create an account <Link className="text-red-500" to="/signUp">Register</Link></p>
                        </div>
                        <div className="divider divider-info">OR</div>
                    </form>
                    <div className="flex gap-5 flex-col pb-10 items-center">
                        <button onClick={signInWithGoogleHandler} className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With Google</button>
                        <button onClick={siggnInWithFb} className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With GitHub</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;