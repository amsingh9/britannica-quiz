import * as actionTypes from './actionTypes'

const initialState = {
    score : 0,
    questions : []
}


const reducer = (state=initialState,action) => {
    console.log(initialState);
    console.log(state);
    switch(action.type) {
        case actionTypes.UPDATE_SCORE : 
            return {
                ...state,
                score : state.score + 1
            };
        case actionTypes.SET_QUESTIONS : 
            return {
                ...state,
                questions : action.ques
            };    
        default : return state
    }
}

export default reducer