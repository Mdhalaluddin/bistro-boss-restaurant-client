import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { Triangle } from "react-loader-spinner";
import useAdmin from "../hooks/useAdmin";


const AdminRouter = (children) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    const { user, loading } = UseAuth();
    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center mt-48">
            <Triangle
                height="180"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRouter;