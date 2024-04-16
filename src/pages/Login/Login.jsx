import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {signInWithPopup} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    const providerGoogle = new GoogleAuthProvider();
    const providerFb = new FacebookAuthProvider();
    
    const signInWithGoogleHandler =()=>{
        signInWithPopup(auth,providerGoogle)
        .then(res=>{
            console.log(res);
            toast("Log In Successfully!");
        })
        .catch(err=>{
            console.error(err.message);
            toast(err.message);
        })
    }
    const siggnInWithFb = ()=>{
        signInWithPopup(auth, providerFb)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.error(err.message);
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
                    <form action="" className="flex gap-5 flex-col pt-10">
                        <div className="flex items-center justify-center">
                            <input className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="email" placeholder="Write Your Email"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="password" placeholder="Write Your Password"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input className="border bg-blue-500 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto cursor-pointer" type="submit" value="Log In"/>
                        </div>

                        <div className="flex items-center justify-center">
                        <p>If you want to create an account <Link className="text-red-500" to="/signUp">Sing Up</Link></p>
                        </div>
                        <div className="divider divider-info">OR</div>
                    </form>
                    <div className="flex gap-5 flex-col pb-10 items-center">
                        <button onClick={signInWithGoogleHandler} className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With Google</button>
                        <button onClick={siggnInWithFb} className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With Facebook</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;