import { Navigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export default function AdminRoute({Childern}) {
    const {auth} = useAuth();
    return auth.role === "admin"? Childern : <Navigate to = "/" />;
}