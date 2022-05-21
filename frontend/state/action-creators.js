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

export function setMessage() { }

export function setQuiz() {
  
}

export function inputChange() { }

export function resetForm() { }

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
      dispatch({type:types.SET_INFO_MESSAGE, payload: res.data.message})
      dispatch({type:types.SET_SELECTED_ANSWER, payload: ""})
      dispatch(fetchQuiz())
    })
    .catch(err =>{
      
    })
  }
}


      
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
