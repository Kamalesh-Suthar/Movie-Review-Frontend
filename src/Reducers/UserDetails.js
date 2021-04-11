const initialState = {
    data: undefined,
}

export const UserDetails = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_USER': return {
            ...state,
            data: action.data
        }
        default: return {
            ...state
        }
    }
}