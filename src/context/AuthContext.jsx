import { Children, createContext, useContext, useState } from "react";
const AuthContext = createContext();

const initialAuth = JSON.parse(localStorage.getItem("auth")) || {
    isAuth: false,
    role: null,
    email: null,
};

export const AuthProvider = ({ Children}) => {
    const [auth, setAuth] = useState(initialAuth);

    const login = (email, password) => {
        if (email === "admin@gmail.com" && password === "admin1234"){
            const data = {isAuth: true, role: "admin", email};
            setAuth(data);
            localStorage.setItem("auth", JSON.stringify(data));
            return "admin";
        }
        if (email === "customer@gmail.com" && password === "customer1234"){
            const data = {isAuth: true, role: "customer", email};
            setAuth(data);
            localStorage.setItem("auth", JSON.stringify(data));
            return "customer";
        }
        alert("Invalid Credentials");
        return null;
    };
    const logout = ()=> {
        setAuth({isAuth: false , role : null, email: null});
        localStorage.removeItem("auth");
    };
    return (
        <AuthContext.Provider value= {{auth, login, logout}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext (AuthContext);