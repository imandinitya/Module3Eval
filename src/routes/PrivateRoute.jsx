import { Navigate } from "react-router-dom";
import {useAuth} from ".../context/AuthContext.jsx";

export default function PrivateRoute({Childern}) {
    const {auth} = useAuth();
    return auth.isAuth ? Childern : <Navigate to = "/" />;
}