import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import PracticeFooter from '../../components/Footer/PracticeFooter'
import Quiz from '../../components/Quiz'
import Cookies from 'universal-cookie'
import { AppContainer } from '../../components/layout'
import { generateNextRandomQuestion, writeCookie } from '../../helpers'

interface IPracticeQuiz {
  questions: any[]
  images: any
  totalNumberOfQuestions: number
}

const PracticeQuiz: React.FC<IPracticeQuiz> = ({ questions, images, totalNumberOfQuestions }) => {
  const cookies = new Cookies()
  const [question, setQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [viewProgress, setViewProgress] = useState<Boolean>(false)
  const [progress, setProgress] = useState<string[]>(cookies.get('progress') ? cookies.get('progress') : [])
  const [incorrect, setIncorrect] = useState<string[]>(cookies.get('incorrect') ? cookies.get('incorrect') : [])

  useEffect(() => {
    incorrect.sort(function (a: any, b: any) {
      return a - b
    })
    writeCookie('incorrect', incorrect)
  }, [incorrect])

  useEffect(() => {
    progress.sort(function (a: any, b: any) {
      return a - b
    })

    writeCookie('progress', progress)
  }, [progress])

  const onAnswerSelected = (event: any) => {
    event.preventDefault()
    const target = event.target
    let questionId = target.name
    setSelectedAnswer(target.id)
    setShowAnswer(true)
    if (target.value === '1') {
      setProgress([...progress, questionId])
    } else {
      setIncorrect([...incorrect, questionId])
    }
  }

  const displayAnswers = () => {
    setShowAnswer(true)
  }

  const handleViewProgress = (state: Boolean) => {
    setViewProgress(state)
  }

  const nextQuestion = () => {
    if (progress.length >= totalNumberOfQuestions) {
      setCompleted(true)
    } else {
      setQuestion(generateNextRandomQuestion(questions, progress, totalNumberOfQuestions))
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }

  const restart = () => {
    setProgress([])
    setIncorrect([])
    setCompleted(false)
    setShowAnswer(false)
    setSelectedAnswer(null)
    setViewProgress(false)
  }

  if (!question && !completed) {
    const nextQuestion = generateNextRandomQuestion(questions, progress, totalNumberOfQuestions)
    setQuestion(nextQuestion)
    return null
  }

  const title = viewProgress ? 'Fragenübersicht' : 'Trainieren'

  return (
    <AppContainer>
      <Header
        title={title}
        withHomeButton={!viewProgress}
        withViewProgress={true}
        viewProgressOpen={viewProgress}
        handleViewProgress={handleViewProgress}
      />
      <Quiz
        viewProgress={viewProgress}
        progress={progress}
        incorrect={incorrect}
        showAnswer={showAnswer}
        onAnswerSelected={onAnswerSelected}
        numberOfQuestions={totalNumberOfQuestions}
        selectedAnswer={selectedAnswer}
        question={question}
        completed={completed}
        images={images}
      />
      <PracticeFooter
        progress={progress}
        numberOfQuestions={totalNumberOfQuestions}
        nextQuestion={nextQuestion}
        showAnswer={showAnswer}
        displayAnswers={displayAnswers}
        viewProgress={viewProgress}
        restart={restart}
        completed={completed}
      />
    </AppContainer>
  )
}

export default PracticeQuiz
