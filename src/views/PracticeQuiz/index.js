import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer/FooterPractice'
import Quiz from '../../components/Quiz/Quiz'
import Cookies from 'universal-cookie'
import { AppContainer } from '../../components/layout'

function PracticeQuiz({ questions, images, numberOfQuestions }) {
  const cookies = new Cookies()
  const [question, setQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [viewProgress, setViewProgress] = useState(false)
  const [progress, setProgress] = useState(cookies.get('progress') ? cookies.get('progress') : [])
  const [incorrect, setIncorrect] = useState(cookies.get('incorrect') ? cookies.get('incorrect') : [])

  useEffect(() => {
    const nextQuestion = generateNextQuestion(questions)
    setQuestion(nextQuestion)
  }, [])

  useEffect(() => {
    progress.sort(function (a, b) {
      return a - b
    })
    incorrect.sort(function (a, b) {
      return a - b
    })
    const expires = new Date()
    expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000)
    expires.toUTCString()
    cookies.set('progress', progress, { expires: expires, path: '/' })
    cookies.set('incorrect', incorrect, { expires: expires, path: '/' })
  }, [progress, incorrect])

  const onAnswerSelected = (event) => {
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

  const handleViewProgress = (state) => {
    setViewProgress(state)
  }

  const nextQuestion = () => {
    if (progress.length >= numberOfQuestions) {
      setCompleted(true)
    } else {
      setQuestion(generateNextQuestion(questions))
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }

  const generateNextQuestion = (questions) => {
    let correctAnswers = progress
    let maxNumber = numberOfQuestions - correctAnswers.length
    let minNumber = 1
    let randNumber = Math.floor(Math.random() * maxNumber + minNumber)
    for (let i = 0; i < correctAnswers.length; i++) {
      if (randNumber >= correctAnswers[i]) {
        randNumber += 1
      }
    }
    let randomNumbersIndex = randNumber - 1
    return questions[randomNumbersIndex]
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
        numberOfQuestions={numberOfQuestions}
        displayAnswers={displayAnswers}
        selectedAnswer={selectedAnswer}
        question={question}
        questions={questions}
        completed={completed}
        images={images}
      />
      <Footer
        progress={progress}
        numberOfQuestions={numberOfQuestions}
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
