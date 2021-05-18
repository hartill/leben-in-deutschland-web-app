import React, { useState } from 'react'
import Results from './Results'
import Review from './Review'
import Question from '../Quiz/Question'
import { theme } from '../../theme'
import { Container } from '../layout'
import { QuizContainer, DisplayImageText, Milk } from '../Quiz/styles'

interface IMockExam {
  images: any
  numberOfQuestions: number
  question: any
  showAnswer: Boolean
  selectedAnswer?: string | undefined | null
  onAnswerSelected: Function
  viewProgress: Boolean
  examProgress: any
  examCompleted: Boolean
}

const MockExam: React.FC<IMockExam> = ({
  images,
  numberOfQuestions,
  question,
  showAnswer,
  selectedAnswer,
  onAnswerSelected,
  viewProgress,
  examProgress,
  examCompleted,
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
    return <Review examProgress={examProgress} numberOfQuestions={numberOfQuestions} />
  } else if (examCompleted) {
    return <Results examProgress={examProgress} numberOfQuestions={numberOfQuestions} />
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
            headerColor={theme.colors.red}
          />
        </QuizContainer>
      </Container>
    )
  }
}

export default MockExam
