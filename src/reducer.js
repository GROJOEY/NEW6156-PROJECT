const initialState = {
    loginValues: '',
  };

const formReducer = (state = initialState, action) => {
switch (action.type) {
    case 'UPDATE_INPUT_FIELD':
    return {
        ...state,
        loginValues: action.payload,
    };
    default:
    return state;
}
};

export default formReducer;