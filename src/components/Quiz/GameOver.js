import React from 'react';
import './quiz.css';
import UserProgressBar from './UserProgressBar'

class GameOver extends React.Component {
  render () {
    return (
      <div className="Container">
        <div className="QuizContainer">
          <div className="QuizHeader">
            <div className="QuestionCategory">
              Alle 300 richtig!
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              <div className="ResultBarBlack"></div>
              <div className="ResultBarRed"></div>
              <div className="ResultBarYellow"></div>
            </div>
          </div>
          <div className='NextQuestion'>
            <UserProgressBar progress={this.state.progress}/>
            <button className='NextQuestionButton' onClick={this.props.restart} >
              <p>Ne&uuml;start?</p>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default GameOver
