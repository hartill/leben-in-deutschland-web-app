import React from 'react';
import './quiz.css';
import Answers from './Answers'

class Questions extends React.Component {
  render () {
    let question = this.props.question
    let image = this.props.question.image
    let customStyle = this.props.headerColor !== undefined ? this.props.headerColor : ''
    return (
      <div className="Container">
        <div className="QuizContainer">
          <div className={'QuizHeader ' + customStyle}>
            <div className="QuestionNumber">
              {question.id}
            </div>
            <div className='QuestionCategory'>
              {question.category}
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              <div className="QuestionText">
                {question.question}
              </div>
              {question.image !== undefined ? this.props.renderImage(image) : null}
              <Answers question={question}
                showAnswer={this.props.showAnswer}
                selectedAnswer={this.props.selectedAnswer}
                onAnswerSelected={this.props.onAnswerSelected} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
