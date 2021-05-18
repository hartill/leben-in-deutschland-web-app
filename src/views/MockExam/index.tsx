import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import MockExamFooter from '../../components/Footer/MockExamFooter'
import MockExam from '../../components/MockExam'
import Cookies from 'universal-cookie'
import { AppContainer } from '../../components/layout'
import { writeCookie, generateQuestionArray } from '../../helpers'

interface IMockExam {
  questions: any[]
  images: any
  totalNumberOfQuestions: number
}

const MockExamView: React.FC<IMockExam> = ({ questions, images, totalNumberOfQuestions }) => {
  const cookies = new Cookies()
  const [question, setQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [examCompleted, setExamCompleted] = useState(false)
  const [viewProgress, setViewProgress] = useState(false)
  const [examProgress, setExamProgress] = useState<any[]>(cookies.get('examProgress') ? cookies.get('examProgress') : [])
  const [examQuestions, setExamQuestions] = useState<any[]>(cookies.get('examQuestions') ? cookies.get('examQuestions') : [])

  const numberOfQuestions = totalNumberOfQuestions > 300 ? 33 : 30

  const restart = () => {
    cookies.remove('examQuestions')
    cookies.remove('examProgress')

    const newExamQuestions = generateQuestionArray(numberOfQuestions)
    setExamQuestions(newExamQuestions)
    setExamProgress([])
    setQuestion(questions[newExamQuestions[0]])
    setShowAnswer(false)
    setSelectedAnswer(null)
    setViewProgress(false)
    setExamCompleted(false)
  }

  if (!examQuestions?.length) {
    const newExamQuestions = generateQuestionArray(numberOfQuestions)
    setExamQuestions(newExamQuestions)
  }

  useEffect(() => {
    writeCookie('examQuestions', examQuestions)
  }, [examQuestions])

  useEffect(() => {
    writeCookie('examProgress', examProgress)
  }, [examProgress])

  const checkForRestart = () => {
    if (numberOfQuestions === 30 && examQuestions && examQuestions.length > 30) {
      restart()
    }
    if (numberOfQuestions === 33 && examQuestions && examQuestions.length < 33) {
      restart()
    }
  }

  checkForRestart()

  const onAnswerSelected = (event: any) => {
    event.preventDefault()
    const target = event.target
    let questionId = target.name
    let questionCategory = questions[questionId - 1].category

    setSelectedAnswer(target.id)
    setShowAnswer(true)

    const newProgressData = {
      questionId: questionId,
      userScore: target.value === '1' ? 1 : 0,
      category: questionCategory,
    }

    setExamProgress([...examProgress, newProgressData])
  }

  const handleViewProgress = () => {
    setViewProgress(!viewProgress)
  }

  const nextQuestion = () => {
    if (examProgress.length >= numberOfQuestions) {
      setExamCompleted(true)
    } else {
      setQuestion(questions[examQuestions[examProgress.length]])
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }

  if (!question && !examCompleted) {
    if (examProgress.length >= numberOfQuestions && !examCompleted) {
      setExamCompleted(true)
    } else {
      setQuestion(questions[examQuestions[examProgress.length]])
    }
    return null
  }

  let title = viewProgress ? 'Fragenübersicht' : 'Probeprüfung'
  return (
    <AppContainer>
      <Header
        title={title}
        withHomeButton={!viewProgress}
        withViewProgress={true}
        viewProgressOpen={viewProgress}
        handleViewProgress={handleViewProgress}
      />
      <MockExam
        viewProgress={viewProgress}
        examProgress={examProgress}
        showAnswer={showAnswer}
        onAnswerSelected={onAnswerSelected}
        selectedAnswer={selectedAnswer}
        question={question}
        numberOfQuestions={numberOfQuestions}
        examCompleted={examCompleted}
        images={images}
      />
      <MockExamFooter
        examProgress={examProgress}
        numberOfQuestions={numberOfQuestions}
        nextQuestion={nextQuestion}
        showAnswer={showAnswer}
        viewProgress={viewProgress}
        restart={restart}
        examCompleted={examCompleted}
      />
    </AppContainer>
  )
}

export default MockExamView
