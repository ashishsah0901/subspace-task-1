import { Button } from "@mui/material";
import React, { useState } from "react";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login">
            <div className="login_container">
                <h1>Log in to Dashboard</h1>
                <form>
                    <label htmlFor="email">Your Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="password"
                    />
                    <p>Forgot Password?</p>
                    <Button
                        disabled={!(email !== "" && password !== "")}
                        variant="contained"
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
