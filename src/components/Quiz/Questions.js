import React from 'react';
import './quiz.css';
import Answers from './Answers'
import UserProgressBar from './UserProgressBar'

class Questions extends React.Component {
  render () {
    let question = this.props.question
    let image = this.props.question.image !== undefined ? require(`./../../static/images/${question.image}`) : null
    return (
      <div className="Container">
        <div className="QuizContainer">
          <div className="QuizHeader">
            <div className="QuestionNumber">
              {question.id}
            </div>
            <div className='QuestionCategory'>
              {question.category}
            </div>
            <div className='OverviewIcon' onClick={this.props.handleViewProgress}>
              <img src ={require("./../../static/icons/qu-overview-icon.svg")} alt='next-question' />
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
          <div className='QuizFooter'>
            <UserProgressBar progress={this.props.progress}/>
            <button className={ this.props.showAnswer ===  true ? 'NextQuestionButton Visible' : 'NextQuestionButton Hidden'} onClick={this.props.nextQuestion} >
              <img src ={require("./../../static/icons/next-qu-icon.svg")} alt='next-question' />
            </button>
            <button className={ this.props.showAnswer ===  false ? 'NextQuestionButton Visible' : 'NextQuestionButton Hidden'} onClick={this.props.displayAnswers} >
              <p>Ich weiß nicht</p>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
