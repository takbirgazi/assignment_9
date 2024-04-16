import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-5 min-h-screen">
            <h2 className="font-bold text-2xl">404 | Page Not Found</h2>
            <Link to="/" className="px-4 py-2 rounded-md bg-blue-500 text-white">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;