import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedRoute = () => {
    let location = useLocation();

    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return (
        <Outlet />
    );
}

export default ProtectedRoute;