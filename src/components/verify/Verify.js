import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./verify.css";
import { useStateValue } from "../../state/StateProvider";
import { Button } from "@mui/material";

const Verify = () => {
    const [{ email }, reducer] = useStateValue();
    const [otp, setOtp] = useState("");
    const backPressed = () => {
        reducer({
            type: "SET_OTP_SEND",
            payload: false,
        });
    };
    return (
        <div className="verify">
            <div className="verify_container">
                <ArrowBackIcon onClick={backPressed} />
                <h1>Verify your email</h1>
                <p>A verification code has been sent to {email}</p>
                <form>
                    <label htmlFor="otp">Verifiction Code</label>
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="number"
                        name="otp"
                        id="otp"
                        placeholder="6 digit verification code"
                    />
                </form>
                <p className="verify_resendOtp">
                    Didn't receive the code? <span>Resend</span>
                </p>
                <Button
                    disabled={!(otp !== "" && otp.length === 6)}
                    variant="contained"
                >
                    Verify Email
                </Button>
            </div>
        </div>
    );
};

export default Verify;
