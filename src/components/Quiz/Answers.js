import React from 'react';
import './quiz.css';

class Answers extends React.Component {
  constructor(props){
    super(props);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(question, showAnswer, selectedAnswer, onAnswerSelected) {
    let output = []
    let answerHighlight = ''
    let disabled = false
    let checked = false
    let active = ''
    if (showAnswer === true) {
      disabled = true
      active = 'disabled'
    }
    for (let i=0; i<question.answers.length; i++) {
      if (showAnswer === true) {
        if (selectedAnswer === '' + i + '') {
          answerHighlight = "incorrectAnswer"
        }
        if (question.answers[i].key === 1) {
          answerHighlight = "correctAnswer"
        }
      }
      output.push (
            <label className={'AnswerOption ' + answerHighlight + ' ' + active} key={i}>
              <div className='AnswerInput'>
                <input
                  type="radio"
                  className="radioCustomButton"
                  name={question.id}
                  id={i}
                  value={question.answers[i].key}
                  onChange={onAnswerSelected}
                  disabled={disabled}
                  checked={checked}
                />
              </div>
              <div className='AnswerText'>
                {question.answers[i].content}
              </div>
            </label>
      )
      answerHighlight = ''
    }
    return output
  }

  render () {
    return (
      this.renderAnswerOptions(this.props.question, this.props.showAnswer, this.props.selectedAnswer, this.props.onAnswerSelected)
    )
  }
}

export default Answers
