import React from 'react'
import './results.css'
import { Container } from '../../layout'

class Results extends React.Component {
  render() {
    let correctAnswers = 0
    let incorrectAnswers = 0
    for (let i = 0; i < this.props.examProgress.length; i++) {
      this.props.examProgress[i].userScore === 1 ? (correctAnswers += 1) : (incorrectAnswers += 1)
    }
    let percentageCorrect = (correctAnswers / this.props.numberOfQuestions) * 100
    let testPassed = percentageCorrect >= 50 ? true : false
    let accentStyle = testPassed ? 'green' : 'red'

    return (
      <Container>
        <div className="QuizContainer">
          <div className={'QuizHeader ' + accentStyle}>
            <div className="QuestionCategory">{testPassed ? 'Du hast bestanden' : 'Du hast nicht bestanden'}</div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              <div className="ResultBox">
                <div className="ResultBoxRow" key={1}>
                  <span>Ergebnis:</span>
                  <div className={'ResultBoxResult ' + accentStyle}>{percentageCorrect.toFixed(0)}%</div>
                </div>
                <div className="ResultBoxRow" key={2}>
                  <span>Korrekte Antworten:</span>
                  <div className="ResultBoxResult green">{correctAnswers}</div>
                </div>
                <div className="ResultBoxRow" key={3}>
                  <span>Falsche Antworten:</span>
                  <div className="ResultBoxResult red">{incorrectAnswers}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Results
