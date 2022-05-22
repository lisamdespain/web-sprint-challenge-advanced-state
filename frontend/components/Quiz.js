import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actions from "../state/action-creators"

export function Quiz(props) {
  

  const { selectAnswer, selectedAnswer, fetchQuiz, postAnswer, quiz, setQuiz } = props;

  quiz.id === "" ? setQuiz(quiz) :
  useEffect(() => {
    fetchQuiz()  
  }, [])
  return (
 
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={selectedAnswer === quiz.answers[0].answer_id ? 'answer selected' : 'answer'} >
                {quiz.answers[0].text}
                <button onClick={() => selectAnswer(quiz.answers[0].answer_id)}>
                {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'select'}</button>
                 
              </div>

              <div className={selectedAnswer === quiz.answers[1].answer_id ? 'answer selected' : 'answer'}>
              {quiz.answers[1].text}
                <button onClick={() => selectAnswer(quiz.answers[1].answer_id)}>{selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'select'}</button>
                
              </div>
            </div>
             
            <button disabled={selectedAnswer ? false : true} id="submitAnswerBtn" onClick={() => postAnswer(quiz.quiz_id, selectedAnswer)}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
export default connect(st => st, actions)(Quiz);