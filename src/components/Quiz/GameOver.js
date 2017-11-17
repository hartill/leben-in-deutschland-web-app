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
            <div className='OverviewIcon' onClick={this.props.handleViewProgress}>
              <img src ={require("./../../static/icons/qu-overview-icon.svg")} alt='next-question' />
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              <div className="ResultBar Black"></div>
              <div className="ResultBar Red"></div>
              <div className="ResultBar Yellow"></div>
            </div>
          </div>
          <div className='QuizFooter'>
            <UserProgressBar progress={this.props.progress}/>
            <button className='NextQuestionButton' onClick={this.props.restart} >
              <p>Neustart?</p>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default GameOver
