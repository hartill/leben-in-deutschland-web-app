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
    let percentageCorrect = correctAnswers / 30 * 100
    output.push(
      <div key='1'>
        <p>{correctAnswers} / 30</p>
        <p>{percentageCorrect.toFixed(0)}%</p>
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
