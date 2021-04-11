import {createStore, combineReducers} from 'redux';

import { UserDetails } from './UserDetails'
import {SignUpForm} from "./SignUpReducer";
import {Movies} from "./MovieDetails";
import {ReviewReducer} from "./ReviewsReducer";

const rootReducer = combineReducers({
    User: UserDetails,
    SignUp: SignUpForm,
    Movies: Movies,
    Reviews: ReviewReducer
})

export const globalStore = createStore(rootReducer)