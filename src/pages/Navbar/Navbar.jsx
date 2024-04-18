import { NavLink, useNavigate } from "react-router-dom";
import "../../App.css"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut= ()=>{
        logOut()
        .then(()=>{
            navigate("/login");
        })
        .catch(err=>{
            console.error(err);
        })
    }

    console.log(user)
    const navlist = 
    <>
        <NavLink to="/" className="p-2">Home</NavLink>
        {
            user ? 
            <>
                <NavLink to="/update" className="p-2">Update Profile</NavLink>
                <button onClick={handleLogOut} className="p-2">Log Out</button>
            </>
            :
            <>
                <NavLink to="/login" className="p-2">Log In</NavLink>
                <NavLink to="/signup" className="p-2">Sign Up</NavLink>
            </>
        }
    </>
    return (
        <div className="bg-base-100">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlist}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Five Star</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlist}
                    </ul>
                </div>
                {
                 user && 
                    <div className="navbar-end btn-circle avatar" title={user?.displayName}>
                        <div className="w-10 rounded-full">
                        <img className="border rounded-full" src={user?.photoURL} />
                        </div>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Navbar;