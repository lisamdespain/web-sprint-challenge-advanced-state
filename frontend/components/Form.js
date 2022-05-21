import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log(props)
 const {postQuiz, inputChange, form} = props;
  const onChange = evt => {
    console.log(evt)
    const {id, value} = evt.target
    inputChange({ id, value }) 
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer) 
    
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} name="newQuestion" id="newQuestion" placeholder="Enter question" value={form.newQuestion}></input>
      <input maxLength={50} onChange={onChange} name="newTrueAnswer" id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer}></input>
      <input maxLength={50} onChange={onChange} name="newFalseAnswer" id="newFalseAnswer" placeholder="Enter false answer" value={form.newFalseAnswer}></input>
      <button disabled={
        form.newQuestion && form.newTrueAnswer && form.newFalseAnswer ? false : true} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
