import React from 'react';
import './quiz.css';
import quizQuestions from './../../api/quizQuestions'

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.questions = quizQuestions
    this.state = {
      question: {},
      progress: [],
      showAnswer: false,
      selectedAnswer: null
    }
    this.generateNextQuestion = this.generateNextQuestion.bind(this);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.onAnswerSelected = this.onAnswerSelected.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillMount() {
    /*this.setState({
      question: this.generateNextQuestion(this.questions),
    })*/
    this.setState({
      question: this.generateNextQuestion(this.questions[0]),
    })
  }

  onAnswerSelected(event) {
    const target = event.target
    this.setState((prevState, props) => {
      return {
        selectedAnswer: target.id,
        showAnswer: true
      }
    })
    if (target.value === '1') {
      this.setState(prevState => ({
          progress: [...prevState.progress, target.name]
      }))
    }
  }

  componentDidUpdate(nextProps, nextState) {
    console.log(this.state)
  }

  generateNextQuestion(questions) {
    let maxNumber = 4
    let minNumber = 0
    let randNumber = Math.floor((Math.random() * maxNumber) + minNumber);
    return questions[randNumber]
  }

  componentWillReceiveProps(nextProps) {
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
        if (this.state.selectedAnswer === ''+ i + '') {
          answerHighlight = "incorrectAnswer"
        }
        if (question.answers[i].key === 1) {
          answerHighlight = "correctAnswer"
        }
      }
      output.push (
            <label className={'AnswerOption ' + answerHighlight + ' ' + active} key={i}>
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
                {question.answers[i].content}
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
        <div className="styles.QuizContainer">
          <div className="QuizHeader">
            <div className="QuestionNumber">
              {question.id}
            </div>
            <div className="QuestionCategory">
              {question.category}
            </div>
            <div className="UserScore">
              1 x
            </div>
          </div>
          <div className="QuizBody">
            <div className="QuestionText">
              {question.question}
            </div>
            {this.renderAnswerOptions(question, this.showAnswer)}
          </div>
        </div>
        <div className={this.state.showAnswer ===  true ? 'Visible' : 'Hidden'}>
          <button className={'NextQuestion'} onClick={this.nextQuestion}>></button>
        </div>
      </div>
    )
  }
}

export default Quiz
