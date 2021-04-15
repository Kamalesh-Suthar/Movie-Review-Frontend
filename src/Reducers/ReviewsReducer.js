const initialState = {
    reviews: {
        data: []
    },
}

export const ReviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_REVIEWS': return {
            ...state,
            reviews: action.data
        }
        default: return {
            ...state
        }
    }
}