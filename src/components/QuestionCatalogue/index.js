import React, { useState } from 'react'
import AQOverview from './CatalogueOverview'
import Question from '../Quiz/Question'
import { Container } from '../layout'
import { QuizContainer, DisplayImageText, Milk } from '../Quiz/styles'
import { theme } from '../../theme'

function AllQuestions({
  images,
  restart,
  progress,
  incorrect,
  numberOfQuestions,
  handleQuestionSelected,
  question,
  showAnswer,
  selectedAnswer,
  onAnswerSelected,
  displayAnswers,
  viewProgress
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
    return (
      <AQOverview
        restart={restart}
        progress={progress}
        incorrect={incorrect}
        numberOfQuestions={numberOfQuestions}
        handleQuestionSelected={handleQuestionSelected}
        question={question}
      />
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
            progress={progress}
            displayAnswers={displayAnswers}
            renderImage={renderImage}
            headerColor={theme.colors.green}
          />
        </QuizContainer>
      </Container>
    )
  }
}

export default AllQuestions
