const initialState = {
    data: undefined,
    isVisible: false
}

export const Movies = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_LIST': return {
            ...state,
            data: action.data
        }
        case 'UPDATE_DETAILS_VISIBILITY': return {
            ...state,
            isVisible: action.data
        }
        case 'UPDATE_SELECTED_MOVIE': return {
            ...state,
            selected: action.data
        }
        default: return {
            ...state
        }
    }
}