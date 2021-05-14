import React, { useState } from 'react'
import Results from './Results'
import Review from './Review'
import Question from '../Quiz/Question'
import { theme } from '../../theme'
import { Container } from '../layout'
import { QuizContainer, DisplayImageText, Milk } from '../Quiz/styles'

function Exam({
  images,
  numberOfQuestions,
  question,
  showAnswer,
  selectedAnswer,
  onAnswerSelected,
  displayAnswers,
  viewProgress,
  examProgress,
  examCompleted,
}) {
  const [showImage, setShowImage] = useState(false)

  const renderImage = (image) => {
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
            displayAnswers={displayAnswers}
            renderImage={renderImage}
            headerColor={theme.colors.red}
          />
        </QuizContainer>
      </Container>
    )
  }
}

export default Exam
