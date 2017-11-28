import React from 'react';
import './results.css';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
    let output = []
    let correctAnswers = 0
    let incorrectAnswers = 0
    for (let i = 0; i < this.props.examProgress.length; i++) {
      this.props.examProgress[i].userScore === 1 ? correctAnswers += 1 : incorrectAnswers += 1
    }
    let percentageCorrect = correctAnswers / this.props.numberOfQuestions * 100
    let testPassed = percentageCorrect >= 50 ? true : false
    let accentStyle = testPassed ? 'green' : 'red'
    output.push(
      <div className='ResultBox' key={1}>
        <div className={'ResultFinalPercentage ' + accentStyle}>
          {percentageCorrect.toFixed(0)}%
        </div>
        {testPassed ? <p>Du hast bestanden</p> : <p>Du hast nicht bestanden</p>}
        <div className='ResultValue'>
          <div className='correctAnswerIcon'>x {correctAnswers}</div>
          <div className='incorrectAnswerIcon'>x {incorrectAnswers}</div>
        </div>
      </div>
    )
    return output
  }

  render () {
    return (
      <div className="Container">
        <div className="QuizContainer">
          <div className="QuizHeader">
            <div className="QuestionCategory">
              Ergebnis
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              {this.renderResults()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Results
