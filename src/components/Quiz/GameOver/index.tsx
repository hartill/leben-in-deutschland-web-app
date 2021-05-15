import React from 'react'
import { GameOverContainer, GameOverBar } from './styles'
import { QuizHeader, QuestionCategory, QuizBodyContainer } from '../Question/styles'

interface IGameOver {}

const GameOver: React.FC<IGameOver> = () => {
  return (
    <>
      <QuizHeader>
        <QuestionCategory>Fertig!</QuestionCategory>
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

export default GameOver
