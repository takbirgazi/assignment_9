import { NavLink } from "react-router-dom";
import "../../App.css"

const Navbar = () => {
    const navlist = 
    <>
        <NavLink to="/" className="p-2">Home</NavLink>
        <NavLink to="/update" className="p-2">Update Profile</NavLink>
        <NavLink to="/userprofile" className="p-2">User Profile</NavLink>
        <NavLink to="/login" className="p-2">Log In</NavLink>
        <NavLink to="/signUp" className="p-2">Sign Up</NavLink>
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
                <div className="navbar-end btn-circle avatar" title="Takbir Gazi">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;