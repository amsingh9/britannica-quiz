import * as actionTypes from './actionTypes'

export const updateScore = () => {
    return {
        type : actionTypes.UPDATE_SCORE
    }
}

export const setQuestions = (question) => {
    return {
        type : actionTypes.SET_QUESTIONS,
        ques : question
    }
}