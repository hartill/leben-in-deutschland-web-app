import React, { useState } from 'react'
import QuestionCatalogueQuiz from '../../components/QuestionCatalogue'
import FooterCatalogue from '../../components/Footer/FooterCatalogue'
import Header from '../../components/Header'
import { AppContainer } from '../../components/layout'

interface IQuestionCatalogue {
  questions: any[]
  images: any
  totalNumberOfQuestions: number
}

const QuestionCatalogue: React.FC<IQuestionCatalogue> = ({ questions, images, totalNumberOfQuestions }) => {
  const [question, setQuestion] = useState<any | undefined>(undefined)
  const [viewProgress, setViewProgress] = useState(false)
  const showAnswer = true

  const handleQuestionSelected = (questionId: number) => {
    setQuestion(questions[questionId - 1])
    setViewProgress(false)
  }

  const handleViewProgress = () => {
    setViewProgress(!viewProgress)
  }

  const nextQuestion = () => {
    if (question?.id) {
      let nextQuestion = parseFloat(question.id)
      if (nextQuestion >= totalNumberOfQuestions) {
        nextQuestion = 0
      }
      setQuestion(questions[nextQuestion])
      setViewProgress(false)
    }
  }

  if (!question) {
    setQuestion(questions[0])
    return null
  }

  let title = viewProgress ? 'Frage auswählen' : 'Fragenkatalog'
  return (
    <AppContainer>
      <Header
        title={title}
        withHomeButton={!viewProgress}
        withViewProgress={true}
        viewProgressOpen={viewProgress}
        handleViewProgress={handleViewProgress}
      />
      <QuestionCatalogueQuiz
        viewProgress={viewProgress}
        showAnswer={showAnswer}
        onAnswerSelected={() => {}}
        numberOfQuestions={totalNumberOfQuestions}
        question={question}
        handleQuestionSelected={handleQuestionSelected}
        images={images}
      />
      <FooterCatalogue nextQuestion={nextQuestion} />
    </AppContainer>
  )
}

export default QuestionCatalogue
