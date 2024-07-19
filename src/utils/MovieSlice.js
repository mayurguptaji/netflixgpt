import {createSlice} from '@reduxjs/toolkit';
const MovieSlice = createSlice({
    name:'movies',
    initialState : {
        nowPlayinMovies : null,
        BGMovieTrialer : null
    },
    reducers : {
        addNowPlayinMovies:(state,action) => {
            state.nowPlayinMovies = action.payload;
        },
        addBGMovie:(state,action) => {
            state.BGMovieTrialer = action.payload;
        }
    }

});

export default MovieSlice.reducer;
export const {addNowPlayinMovies , addBGMovie} = MovieSlice.actions;