// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

const initialWheelState = {
  id: 0,
  grid: ["B","","","","",""]
}
function wheel(state = initialWheelState, action) {
  switch (action.type) {
  case types.MOVE_COUNTERCLOCKWISE: {
    const counterID = state.id - 1
      if (counterID === -1) {
      return {...state, id: 5, grid: ["","","","","","B"]}
    } else if (counterID === 0) {
      return {...state, id: 0, grid: ["B","","","","",""]}
    } else if (counterID === 1) {
      return {...state, id: 1, grid: ["","B","","","",""]}
    } else if (counterID === 2) {
      return {...state, id: 2, grid: ["","","B","","",""]}
    } else if (counterID === 3) {
      return {...state, id: 3, grid: ["","","","B","",""]}
    } else if (counterID === 4) {
      return {...state, id: 4, grid: ["","","","","B",""]}
    } 
  }
  // eslint-disable-next-line no-fallthrough
  case types.MOVE_CLOCKWISE: {
    const clockwiseID = state.id + 1
      if (clockwiseID === 1) {
      return {...state, id: 1, grid: ["","B","","","",""]}
    } else if (clockwiseID === 2) {
      return {...state, id: 2, grid: ["","","B","","",""]}
    } else if (clockwiseID === 3) {
      return {...state, id: 3, grid: ["","","","B","",""]}
    } else if (clockwiseID === 4) {
      return {...state, id: 4, grid: ["","","","","B",""]}
    } else if (clockwiseID === 5) {
      return {...state, id: 5, grid: ["","","","","","B"]}
    } else if (clockwiseID === 6) {
      return {...state, id: 0, grid: ["B","","","","",""]}
    }
  }
  // eslint-disable-next-line no-fallthrough
  default: return state
}
  
 } 

const initialQuizState = {
  quiz_id: '',
  question: '',
  answers: [
    {answer_id: '',
    text: ''},
    {answer_id: '',
    text: ''}
  ]
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE: {
      return action.payload
   }
   default: return state
} 
}

const initialSelectedAnswerState = ""
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER:
    return action.payload
 default: 
  return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE:
    return action.payload
 default: 
  return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE: {
      const { id, value } = action.payload
      return {...state, [id]: value }
    }
 default: 
  return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
