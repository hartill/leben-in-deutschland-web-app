import React from 'react';
import './quiz.css';
import quizQuestions from './../../api/quizQuestions'

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.questions = quizQuestions
    this.state = {
      question: {},
      showAnswer: false,
      selectedAnswer: null
    }
    this.generateNextQuestion = this.generateNextQuestion.bind(this);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.onAnswerSelected = this.onAnswerSelected.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: this.generateNextQuestion(this.questions),
      //question: this.questions[20],
    })
  }

  onAnswerSelected(event) {
    const target = event.target
    let questionId = target.name
    this.setState((prevState, props) => {
      return {
        selectedAnswer: target.id,
        showAnswer: true
      }
    })
  }

  generateNextQuestion(questions) {
    let maxNumber = 300
    let minNumber = 1
    let randNumber = Math.floor((Math.random() * maxNumber) + minNumber);
    let randomNumbersIndex = randNumber - 1
    return questions[randomNumbersIndex]
  }

  nextQuestion() {
    this.setState((prevState, props) => {
      return {
        question: this.generateNextQuestion(this.questions),
        selectedAnswer: null,
        showAnswer: false
      }
    })
  }

  renderAnswerOptions(question, showAnswer) {
    let output = []
    let answerHighlight = ''
    let disabled = false
    let checked = false
    let active = ''
    if (this.state.showAnswer === true) {
      disabled = true
      active = 'disabled'
    }
    for (let i=0; i<question.answers.length; i++) {
      if (this.state.showAnswer === true) {
        if (this.state.selectedAnswer === '' + i + '') {
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
                  onChange={this.onAnswerSelected}
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
    let question = this.state.question
    return (
      <div className="Container">
        <div className="QuizContainer">
          <div className="QuizHeader">
            <div className="QuestionNumber">
              {question.id}
            </div>
            <div className="QuestionCategory">
              {question.category}
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              <div className="QuestionText">
                {question.question}
              </div>
              <div className="QuestionImage">
                {question.image !== undefined ? <img src ={require(`./../../static/images/${question.image}`)} alt='leben-in-deutschland-test' /> : null}
              </div>
              {this.renderAnswerOptions(question, this.showAnswer)}
            </div>
          </div>
          <div className={'NextQuestion'}>
            <button className={ this.state.showAnswer ===  true ? 'NextQuestionButton Visible' : 'NextQuestionButton Hidden'} onClick={this.nextQuestion} >
              <img src ={require("./../../static/images/next-qu-icon-01.png")} alt='next-question' />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz
