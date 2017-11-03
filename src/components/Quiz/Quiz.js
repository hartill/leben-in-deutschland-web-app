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
      while (this.state.progress.includes(questionId)) {
        questionId += 300
      }
      if (questionId <= 3000) {
        this.setState(prevState => ({
            progress: [...prevState.progress, questionId]
        }))
      }
    }
  }

  componentDidUpdate(nextProps, nextState) {
    this.state.progress.sort(function (a, b){return a-b})
  }

  generateNextQuestion(questions) {
    let correctAnswers = this.state.progress
    //correctAnswers.sort(function (a, b){return a-b})
    let maxNumber = 3000 - correctAnswers.length
    let minNumber = 1
    let randNumber = Math.floor((Math.random() * maxNumber) + minNumber);
    for (let i = 0; i < correctAnswers.length; i++) {
      if (randNumber >= correctAnswers[i]) {
        randNumber += 1
      }
    }
    while (randNumber > 300) {
      randNumber -= 300
    }
    let randomNumbersIndex = randNumber - 1
    return questions[randomNumbersIndex]
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
    let userProgress = this.state.progress.length / 3000 * 100
    let userProgressLabel = Math.ceil(userProgress)
    let userProgressStyle = {
      flexBasis: userProgress + '%',
    }
    let userProgressLabelStyle = {
      marginLeft: userProgress + '%',
    }
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
            <div className="UserScore">
              1 x
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              <div className="QuestionText">
                {question.question}
              </div>
              {this.renderAnswerOptions(question, this.showAnswer)}
            </div>
            <div className={'NextQuestion'}>
              <button className={ this.state.showAnswer ===  true ? 'NextQuestionButton Visible' : 'NextQuestionButton Hidden'} onClick={this.nextQuestion} />
            </div>
          </div>
        </div>
        <div className="UserProgressBarContainer">
          <div className ="UserProgressBar">
            <div className ="UserProgressBarCorrect" style={userProgressStyle}></div>
            <div className ="UserProgressBarIncomplete"></div>
          </div>
          <div className ="UserProgressLabelContainer" style={userProgressLabelStyle}>
            <div className ="UserProgressArrow"></div>
            <div className ="UserProgressLabel">{userProgressLabel}%</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz
