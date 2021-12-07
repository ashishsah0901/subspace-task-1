export const initialState = {
    login: true,
    otpSend: false,
    email: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return {
                ...state,
                login: action.payload,
            };
        case "SET_OTP_SEND":
            return {
                ...state,
                otpSend: action.payload,
            };
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
