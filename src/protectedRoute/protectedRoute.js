import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/context";

const ProtectedRoute = () => {
  const { userData } = useAuth();
  return userData ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
