import { useState } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";


export default function LoginPage({setPage}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        setPage("home");
    }

    if(!localStorage.access.token){
        
    }

    return (
        <LoginForm />
    )
}