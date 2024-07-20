import {createSlice} from '@reduxjs/toolkit';
const MovieSlice = createSlice({
    name:'movies',
    initialState : {
        nowPlayinMovies : null,
        BGMovieTrialer : null,
        popularMovies : null,
    },
    reducers : {
        addNowPlayinMovies:(state,action) => {
            state.nowPlayinMovies = action.payload;
        },
        addNowPopularMovies:(state,action) => {
            state.popularMovies = action.payload;
        },
        addBGMovie:(state,action) => {
            state.BGMovieTrialer = action.payload;
        }
    }

});

export default MovieSlice.reducer;
export const {addNowPopularMovies,addNowPlayinMovies , addBGMovie} = MovieSlice.actions;