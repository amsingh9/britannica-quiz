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

export const addCorrectAns = (question) => {
    return {
        type : actionTypes.ADD_CORRECT_ANSWER,
        correctans : question
    }
}

export const addWrongAns = (question) => {
    return {
        type : actionTypes.ADD_WRONG_ANSWER,
        wrongans : question
    }
}