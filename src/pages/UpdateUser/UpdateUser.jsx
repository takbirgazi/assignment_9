import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import auth from "../../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateUser = () => {
    const editProfileHandler = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photourl.value;
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
        })
        .then(()=>{
            toast("Update Successfully");
        })
        .catch(err=>{
            console.error(err);
        })
    }
    return (
        <div>
            <Helmet>
                <title>Update User - Five Star</title>
            </Helmet>
            <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
                <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                    <h2 className="font-bold text-xl text-center">Update User</h2>
                    <form onSubmit={editProfileHandler} className="flex gap-5 flex-col pt-10">
                        <div className="flex items-center justify-center">
                            <input name="name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Your Name" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="photourl" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Your photoURL" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="submit" className="border bg-blue-500 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto cursor-pointer" type="submit" value="Update"/>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateUser;