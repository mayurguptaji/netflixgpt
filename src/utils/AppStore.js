import {configureStore} from '@reduxjs/toolkit'
import UserSliceReducer from './UserSlice';
import MovieSliceReducer from './MovieSlice';

const appStore = configureStore({
    reducer : {
        user:UserSliceReducer,
        movie:MovieSliceReducer
    }
});
export default appStore;