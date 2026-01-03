import { Navigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
export default function CustomerRoute({Childern}) {
    const {auth} = useAuth();
    return auth.role === "customer"? Childern : <Navigate to = "/" />;
}