import {configureStore} from '@reduxjs/toolkit'
import UserSliceReducer from './UserSlice';

const appStore = configureStore({
    reducer : {
        user:UserSliceReducer
    }
});
export default appStore;