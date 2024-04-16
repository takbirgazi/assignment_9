import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
            <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                <h2 className="font-bold text-xl text-center">Sign Up</h2>
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
                     <p>If you want to create an account <Link className="text-red-500" to="/singup">Sing Up</Link></p>
                    </div>
                    <div className="divider divider-info">OR</div>
                </form>
                <div className="flex gap-5 flex-col pb-10 items-center">
                    <button className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With Google</button>
                    <button className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;