import React from 'react'
import { GameOverContainer, GameOverBar } from './styles'
import { QuizHeader, QuestionCategory, QuizBodyContainer } from '../Question/styles'

class GameOver extends React.Component {
  render() {
    return (
      <>
        <QuizHeader>
          <QuestionCategory>Alle 300 richtig!</QuestionCategory>
        </QuizHeader>
        <QuizBodyContainer>
          <GameOverContainer>
            <GameOverBar className="black"></GameOverBar>
            <GameOverBar className="red"></GameOverBar>
            <GameOverBar className="yellow"></GameOverBar>
          </GameOverContainer>
        </QuizBodyContainer>
      </>
    )
  }
}

export default GameOver
