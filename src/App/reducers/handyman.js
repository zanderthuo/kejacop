const initialState = {
    formValues: {},
    message: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "HANDY_MAN_FORM_VALUES":
            return {
                ...state,
                formValues: action.payload
            }
        case "ADD_HANDYMAN":
            return {
                ...state,
                message: "Form submitted!!!"
            }
        default:
            return state;
    }
}