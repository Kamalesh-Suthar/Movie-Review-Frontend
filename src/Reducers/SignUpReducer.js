const initialState = {

}

export const SignUpForm = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_NAME': return {
            ...state,
            name: action.data
        }
        case 'UPDATE_EMAIL': return {
            ...state,
            email: action.data
        }
        case 'UPDATE_PASSWORD': return {
            ...state,
            password: action.data
        }
        case 'CONFIRM_PASSWORD': return {
            ...state,
            confirmPassword: action.data
        }
        case 'EMAIL_VALID': return  {
            ...state,
            isEmailValid: action.data
        }
        case 'PASSWORD_VALID': return  {
            ...state,
            isPasswordValid: action.data
        }
        default: return {
            ...state
        }
    }
}