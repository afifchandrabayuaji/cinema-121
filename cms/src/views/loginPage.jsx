import { useState } from "react";
import Toastify from "toastify-js"

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        setPage("home");
    }

    return (
        <>
            <div>
                <form onSubmit={handleLogin}>
                    <div>
                        {email}
                        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        {password}
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}