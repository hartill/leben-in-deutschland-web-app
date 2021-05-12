import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import ExamFooter from '../../components/ExamFooter'
import Exam from '../../components/Exam'
import Cookies from 'universal-cookie'
import { AppContainer } from '../../components/layout'
import { shuffleArray, generateThreeQuestionsFromState } from '../../helpers'

function MockExam({ questions, images, totalNumberOfQuestions }) {
  const cookies = new Cookies()
  const [question, setQuestion] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [examCompleted, setExamCompleted] = useState(false)
  const [viewProgress, setViewProgress] = useState(false)
  const [examProgress, setExamProgress] = useState(cookies.get('examProgress') ? cookies.get('examProgress') : [])
  const [examQuestions, setExamQuestions] = useState(cookies.get('examQuestions') ? cookies.get('examQuestions') : [])

  let numberOfQuestions = totalNumberOfQuestions > 300 ? 33 : 30

  const generateQuestionArray = () => {
    let output = []
    for (let n = 0; n < 300; n++) {
      output.push(n)
    }
    shuffleArray(output)
    let QuestionArray = output.slice(0, 30)
    if (numberOfQuestions === 33) {
      let stateQuestions = generateThreeQuestionsFromState()
      QuestionArray.push.apply(QuestionArray, stateQuestions)
      shuffleArray(QuestionArray)
    }
    return QuestionArray
  }

  useEffect(() => {
    if (examProgress.length >= numberOfQuestions) {
      setExamCompleted(true)
    }
    if (!examQuestions.length) {
      const newExamQuestions = generateQuestionArray()
      setExamQuestions(newExamQuestions)
    }
  }, [])

  useEffect(() => {
    if (examQuestions.length > 0) {
      setQuestion(questions[examQuestions[examProgress.length]])
    }
    writeCookie('examQuestions', examQuestions)
  }, [examQuestions])

  useEffect(() => {
    // pitfall check for number of questions changed in middle of quiz
    if (numberOfQuestions === 30 && examQuestions.length > 30) {
      restart()
    }
    if (numberOfQuestions === 33 && examQuestions.length < 33) {
      restart()
    }
  }, [])

  useEffect(() => {
    writeCookie('examProgress', examProgress)
  }, [examProgress])

  useEffect(() => {
    if (!examCompleted) {
      nextQuestion()
    }
  }, [examCompleted])

  const writeCookie = (name, data) => {
    const expires = new Date()
    expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000)
    expires.toUTCString()
    cookies.set(name, data, { expires: expires, path: '/', httpOnly: false })
  }

  const onAnswerSelected = (event) => {
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

  const displayAnswers = () => {
    setShowAnswer(true)
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

  const restart = () => {
    cookies.remove('examQuestions')
    cookies.remove('examProgress')

    const newExamQuestions = generateQuestionArray()
    setExamQuestions(newExamQuestions)
    setExamProgress([])
    setShowAnswer(false)
    setSelectedAnswer(null)
    setViewProgress(false)
    setExamCompleted(false)
  }

  if (!question && !examCompleted) {
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
      <Exam
        viewProgress={viewProgress}
        examProgress={examProgress}
        showAnswer={showAnswer}
        onAnswerSelected={onAnswerSelected}
        displayAnswers={displayAnswers}
        selectedAnswer={selectedAnswer}
        question={question}
        questions={questions}
        restart={restart}
        numberOfQuestions={numberOfQuestions}
        examCompleted={examCompleted}
        images={images}
      />
      <ExamFooter
        examProgress={examProgress}
        numberOfQuestions={numberOfQuestions}
        nextQuestion={nextQuestion}
        showAnswer={showAnswer}
        displayAnswers={displayAnswers}
        viewProgress={viewProgress}
        restart={restart}
        examCompleted={examCompleted}
      />
    </AppContainer>
  )
}

export default MockExam
