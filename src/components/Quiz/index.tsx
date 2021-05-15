import React, { useState } from 'react'
import GameOver from './GameOver'
import QuestionOverview from './QuestionOverview'
import Question from './Question/index'
import { Container } from '../layout'
import { QuizContainer, DisplayImageText, Milk } from './styles'
import { theme } from '../../theme'

interface IQuiz {
  images: any,
  viewProgress: Boolean,
  progress: any,
  incorrect: any,
  numberOfQuestions: number,
  completed: Boolean,
  question: any,
  showAnswer: Boolean,
  selectedAnswer: any,
  onAnswerSelected: Function,
}

const Quiz: React.FC<IQuiz> = ({
  images,
  viewProgress,
  progress,
  incorrect,
  numberOfQuestions,
  completed,
  question,
  showAnswer,
  selectedAnswer,
  onAnswerSelected,
}) => {
  const [showImage, setShowImage] = useState(false)

  const renderImage = (image: string) => {
    const imageKey = 'image_' + image
    const ImageComponent = images[imageKey]

    if (!showImage) {
      return <DisplayImageText onClick={() => setShowImage(true)}>Bild ansehen</DisplayImageText>
    } else {
      return (
        <Milk onClick={() => setShowImage(false)}>
          <img src={ImageComponent} alt={imageKey} />
        </Milk>
      )
    }
  }

  if (viewProgress) {
    return <QuestionOverview progress={progress} incorrect={incorrect} numberOfQuestions={numberOfQuestions} />
  } else if (completed) {
    return (
      <Container>
        <QuizContainer>
          <GameOver />
        </QuizContainer>
      </Container>
    )
  } else {
    return (
      <Container>
        <QuizContainer>
          <Question
            question={question}
            showAnswer={showAnswer}
            selectedAnswer={selectedAnswer}
            onAnswerSelected={onAnswerSelected}
            renderImage={renderImage}
            headerColor={theme.colors.blue}
          />
        </QuizContainer>
      </Container>
    )
  }
}

export default Quiz
