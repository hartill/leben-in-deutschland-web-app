import React, { useState, useEffect } from 'react'
import AllQuestionQuiz from '../../components/AllQuestionQuiz'
import FooterCatalogue from '../../components/Footer/FooterCatalogue'
import Header from '../../components/Header'
import { AppContainer } from '../../components/layout'

function QuestionCatalogue({ questions, numberOfQuestions, images }) {
  const [question, setQuestion] = useState(null)
  const [viewProgress, setViewProgress] = useState(false)
  const showAnswer = true
  const displayAnswers = true

  useEffect(() => {
    setQuestion(questions[0])
  }, [])

  const handleQuestionSelected = (questionId) => {
    setQuestion(questions[questionId - 1])
    setViewProgress(false)
  }

  const handleViewProgress = () => {
    setViewProgress(!viewProgress)
  }

  const nextQuestion = () => {
    let nextQuestion = parseFloat(question.id)
    if (nextQuestion >= numberOfQuestions) {
      nextQuestion = 0
    }
    setQuestion(questions[nextQuestion])
    setViewProgress(false)
  }

  if (!question) {
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
      <AllQuestionQuiz
        viewProgress={viewProgress}
        showAnswer={showAnswer}
        onAnswerSelected={() => {}}
        numberOfQuestions={numberOfQuestions}
        displayAnswers={displayAnswers}
        selectedAnswer={null}
        question={question}
        questions={questions}
        handleQuestionSelected={handleQuestionSelected}
        images={images}
      />
      <FooterCatalogue nextQuestion={nextQuestion} />
    </AppContainer>
  )
}

export default QuestionCatalogue
