import React, { useState } from 'react'
import CatalogueOverview from './CatalogueOverview'
import Question from '../Quiz/Question'
import { Container } from '../layout'
import { QuizContainer, DisplayImageText, Milk } from '../Quiz/styles'
import { theme } from '../../theme'

interface IQuestionCatalogue {
  images: any
  numberOfQuestions: number
  handleQuestionSelected: Function
  question: any
  showAnswer: Boolean
  onAnswerSelected: Function
  viewProgress: Boolean
}

const QuestionCatalogue: React.FC<IQuestionCatalogue> = ({
  images,
  numberOfQuestions,
  handleQuestionSelected,
  question,
  showAnswer,
  onAnswerSelected,
  viewProgress,
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
    return <CatalogueOverview numberOfQuestions={numberOfQuestions} handleQuestionSelected={handleQuestionSelected} question={question} />
  } else {
    return (
      <Container>
        <QuizContainer>
          <Question
            question={question}
            showAnswer={showAnswer}
            onAnswerSelected={onAnswerSelected}
            renderImage={renderImage}
            headerColor={theme.colors.green}
          />
        </QuizContainer>
      </Container>
    )
  }
}

export default QuestionCatalogue
