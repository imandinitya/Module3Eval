import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        const role = login(email,password);
        if (role === "admin") 
            navigate("/admin/dashboard");
        if (role === "customer")
            navigate("/customer/dashboard");
    };
    return(
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange = {(e) => setEmail(e.target.value)} />
            <br/>
            <input placeholder="password" onChange={(e) => setPassword (e.target.value)}/>
            <br/>
            <button onClick = {handleLogin}>Login</button>
        </div>
    );
}