import * as actionTypes from './actionTypes'

const initialState = {
    score : 0,
    questions : [],
    correctans : [],
    wrongans : []
}


const reducer = (state=initialState,action) => {
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
        case actionTypes.ADD_CORRECT_ANSWER :
            return {
                ...state,
                correctans : state.correctans.concat(action.correctans)
            };
        case actionTypes.ADD_WRONG_ANSWER:
            return {
                ...state,
                wrongans : state.wrongans.concat(action.wrongans)
            };                    
        default : return state
    }
}

export default reducer