import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actions from "../state/action-creators"

export function Quiz(props) {
  useEffect(() => {
    setQuiz()
  }, [])
  const { selectAnswer, selectedAnswer, setQuiz, postAnswer, quiz } = props;
  console.log(props)
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={selectedAnswer ? 'answer selected' : 'answer'} >
                {quiz.answers[0].text}
                <button onClick={() => selectAnswer(quiz.answers[0].answer_id)}>
                {selectedAnswer ? 'SELECTED' : 'select'}</button>
                 
              </div>

              <div className={selectedAnswer ? 'answer selected' : 'answer'}>
              {quiz.answers[1].text}
                <button onClick={() => selectAnswer(quiz.answers[1].answer_id)}>{selectedAnswer ? 'SELECTED' : 'select'}</button>
                
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={postAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
export default connect(st => st, actions)(Quiz);