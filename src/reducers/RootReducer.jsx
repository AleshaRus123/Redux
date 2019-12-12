

const initialState = { email: null, password: null, auth: false, tableStrings: false };

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EMAIL_CHANGE':
            state.email = action.value;
            return state;
        case 'PASSWORD_CHANGE':
            state.password = action.value;
            return state;
        case 'AUTH':
            state.auth = true;
            return state;
        case 'ADD_ROW':
            state.tableStrings = action.value;
            return state;
        default: return state;
    }
};

export default RootReducer;