import React from 'react';
import './quiz.css';
import quizQuestions from './../../api/quizQuestions'
import Lightbox from 'react-image-lightbox';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.questions = quizQuestions
    this.state = {
      question: {},
      progress: [],
      showAnswer: false,
      selectedAnswer: null,
      completed: false,
      isOpen: false
    }
    this.generateNextQuestion = this.generateNextQuestion.bind(this);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.onAnswerSelected = this.onAnswerSelected.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: this.generateNextQuestion(this.questions),
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
    if (target.value === '1') {
      if (this.state.progress.includes(questionId) === false) {
        this.setState(prevState => ({
            progress: [...prevState.progress, questionId]
        }))
      }
    }
  }

  componentDidUpdate(nextProps, nextState) {
    this.state.progress.sort(function (a, b){return a-b})
    console.log(this.state.progress)
  }

  generateNextQuestion(questions) {
    let correctAnswers = this.state.progress
    let maxNumber = 300 - correctAnswers.length
    let minNumber = 1
    if (maxNumber !== 0) {
      let randNumber = Math.floor((Math.random() * maxNumber) + minNumber);
      for (let i = 0; i < correctAnswers.length; i++) {
        if (randNumber >= correctAnswers[i]) {
          randNumber += 1
        }
      }
      let randomNumbersIndex = randNumber - 1
      return questions[randomNumbersIndex]
    } else {
      this.setState(prevState => ({
          completed: true
      }))
    }
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

  renderImage(image) {
    let isOpen = this.state.isOpen
    let photoIndex = 0
    return (
      <div className="QuestionImage" onClick={() => this.setState({ isOpen: true })}>
        <p>
          View Image
        </p>
      {isOpen &&
      <Lightbox
          mainSrc={image}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() => {}}
          onMoveNextRequest={() => {}}
      />
      }
      </div>
    )
  }

  render () {
    let userProgress = this.state.progress.length
    if (this.state.completed === false) {
      let question = this.state.question
      let image = this.state.question.image !== undefined ? require(`./../../static/images/${question.image}`) : null
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
                {question.image !== undefined ? this.renderImage(image) : null}
                {this.renderAnswerOptions(question, this.showAnswer)}
              </div>
            </div>
            <div className='NextQuestion'>
              <div className="UserScore">
                {userProgress} / 300
              </div>
              <button className={ this.state.showAnswer ===  true ? 'NextQuestionButton Visible' : 'NextQuestionButton Hidden'} onClick={this.nextQuestion} >
                <img src ={require("./../../static/images/next-qu-icon-01.png")} alt='next-question' />
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Container">
          <div className="QuizContainer">
            <div className="QuizHeader">
              Alle 300 richtig!
            </div>
            <div className="QuizBodyContainer">
              Fur Ne&uuml;start Seite neu laden
            </div>
            <div className='NextQuestion'>
              <div className="UserScore">
                {userProgress} / 300
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Quiz
