import {createSlice} from '@reduxjs/toolkit';

const GPTSlice = createSlice({
    name : 'GPT',
    initialState : {
        showGPTSearch : false,
        gptMovies : null,
        gptmoviesArray : null,
    },
    reducers : {
        toggleGPTSearchView : (state,action) => {
            state.showGPTSearch = !(action.payload);
        },
        addGPTMovieResult : (state,action) => {
            state.gptMovies = action.payload.searchresults;
            state.gptmoviesArray = action.payload.SearchResultsTMDBResolvedPRomise;
        }
    } 
});

export const {toggleGPTSearchView ,addGPTMovieResult } = GPTSlice.actions;
export default GPTSlice.reducer;