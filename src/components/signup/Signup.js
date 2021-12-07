import { Button, Checkbox } from "@mui/material";
import React, { useState } from "react";
import "./signup.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useStateValue } from "../../state/StateProvider";

const Signup = () => {
    const [, reducer] = useStateValue();
    const [passToggle, setPassToggle] = useState(false);
    const [cPassToggle, setCPassToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        reducer({
            type: "SET_OTP_SEND",
            payload: true,
        });
        reducer({
            type: "SET_EMAIL",
            payload: email,
        });
    };
    return (
        <div className="signup">
            <div className="signup_container">
                <h1>Create an Account</h1>
                <form>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
                        placeholder="Enter Mobile"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter Email"
                    />
                    <div className="signup_password">
                        <input
                            value={password}
                            type={`${passToggle ? "text" : "password"}`}
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className="signup_passwordToggle"
                            onClick={() => setPassToggle(!passToggle)}
                        >
                            {!passToggle ? (
                                <VisibilityIcon />
                            ) : (
                                <VisibilityOffIcon />
                            )}
                        </div>
                    </div>
                    <div className="signup_password">
                        <input
                            value={cPassword}
                            type={`${cPassToggle ? "text" : "password"}`}
                            placeholder="Confirm password"
                            onChange={(e) => setCPassword(e.target.value)}
                        />
                        <div
                            className="signup_passwordToggle"
                            onClick={() => setCPassToggle(!cPassToggle)}
                        >
                            {!cPassToggle ? (
                                <VisibilityIcon />
                            ) : (
                                <VisibilityOffIcon />
                            )}
                        </div>
                    </div>
                    <div className="signup_confirm">
                        <Checkbox
                            value={isChecked}
                            onChange={(e) => setIsChecked(e.target.value)}
                        />
                        <span>
                            I hereby confirm that I am above 18 years old.
                        </span>
                    </div>
                    <Button
                        disabled={
                            !(
                                email !== "" &&
                                password !== "" &&
                                cPassword !== "" &&
                                password === cPassword &&
                                isChecked
                            )
                        }
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Verify OTP
                    </Button>
                    <p>
                        By creating this account, you agree to our{" "}
                        <span>Privacy Policy</span> and{" "}
                        <span>Terms of Use</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
