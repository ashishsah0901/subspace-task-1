import { Button } from "@mui/material";
import "./App.css";
import Body from "./components/body/Body";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Verify from "./components/verify/Verify";
import { useStateValue } from "./state/StateProvider";

function App() {
    const [{ login, otpSend }, reducer] = useStateValue();
    const handleClick = () => {
        reducer({
            type: "SET_LOGIN",
            payload: !login,
        });
    };
    return (
        <div className="app">
            <div className="app_header">
                <h1>Subspace.</h1>
                <div className="app_signin">
                    <h4>{!login ? "Already a user" : "New to Subspace"}?</h4>
                    <Button variant="contained" onClick={handleClick}>
                        {!login ? "Login" : "Sign Up"}
                    </Button>
                </div>
            </div>
            <div className="app_body">
                {login ? <Login /> : !otpSend ? <Signup /> : <Verify />}
                <Body />
            </div>
        </div>
    );
}

export default App;
