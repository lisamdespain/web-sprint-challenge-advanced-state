// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'
import axios from 'axios'

export function moveClockwise() { 
  return {
    type: types.MOVE_CLOCKWISE
}
}
export function moveCounterClockwise() { 
  return {
  type: types.MOVE_COUNTERCLOCKWISE
}
}
export function selectAnswer(id) {
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: id
  }
}

export function setMessage(message) {
  return {
    type:types.SET_INFO_MESSAGE,
    payload: message
  }
}

export function setQuiz() {
 return {
   type: types.SET_QUIZ_INTO_STATE
 }
}

export function inputChange({id, value}) {
  return {
    type: types.INPUT_CHANGE,
    payload: {id, value}
  }
}

export function resetForm() {
  return {
    type: types.RESET_FORM}
}

// ❗ Async action creators
// First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
export function fetchQuiz() {
  return function (dispatch){
    axios.get("http://localhost:9000/api/quiz/next")
    .then(res =>{
       dispatch({type:types.SET_QUIZ_INTO_STATE, payload: res.data})
    })
    .catch(err =>{
      dispatch({type:types.SET_INFO_MESSAGE, payload: err.data.message})
    })
  }
  }

export function postAnswer(quizId, answerId) {
  
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    const newAnswer = { quiz_id: quizId, answer_id: answerId}
    axios.post("http://localhost:9000/api/quiz/answer", newAnswer)
    .then(res =>{
      console.log("post message: ", res.data.message)
      dispatch({type:types.SET_SELECTED_ANSWER, payload: ""})
      dispatch(setMessage(res.data.message))
      dispatch(fetchQuiz())
    })
    .catch(err =>{
      dispatch({type:types.SET_INFO_MESSAGE, payload: err.data.message})
    })
  }
}


      
export function postQuiz(question, trueAnswer, falseAnswer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    const newQuiz = { question_text: question, true_answer_text: trueAnswer, false_answer_text: falseAnswer}
    axios.post("http://localhost:9000/api/quiz/new", newQuiz)
    .then(res =>{
      console.log("post message: ", res)
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
    })
    .catch(err =>{
      console.log(err.statusText)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
