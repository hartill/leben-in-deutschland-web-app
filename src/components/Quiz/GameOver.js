import React from 'react';
import './quiz.css';

class GameOver extends React.Component {
  render () {
    return (
      <div>
        <div className="QuizHeader">
          <div className="QuestionCategory">
            Alle 300 richtig!
          </div>
        </div>
        <div className="QuizBodyContainer">
          <div className="QuizBody">
            <div className="ResultBar Black"></div>
            <div className="ResultBar Red"></div>
            <div className="ResultBar Yellow"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default GameOver
