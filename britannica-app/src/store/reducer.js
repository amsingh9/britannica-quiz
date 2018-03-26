import * as actionTypes from './actionTypes'

const initialState = {
    score : 0
}


const reducer = (state=initialState,action) => {
    console.log(action.type);
    switch(action.type) {
        case actionTypes.UPDATE_SCORE : 
            return {
                ...state,
                score : state.score + 1
            };
        default : return state
    }
}

export default reducer