import {configureStore} from '@reduxjs/toolkit'
import UserSliceReducer from './UserSlice';
import MovieSliceReducer from './MovieSlice';
import GPTSliceReducer from './GPTSlice';

const appStore = configureStore({
    reducer : {
        user:UserSliceReducer,
        movie:MovieSliceReducer,
        gpt:GPTSliceReducer,
    }
});
export default appStore;