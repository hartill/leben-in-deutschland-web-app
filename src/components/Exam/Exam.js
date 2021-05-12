import React from 'react'
import Results from './Results/'
import Review from './Review/'
import Questions from './../Quiz/Questions'

class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.images = this.props.images
    this.state = {
      lightBoxIsOpen: false,
    }
    this.renderImage = this.renderImage.bind(this)
  }

  componentWillMount() {
    this.setState({
      lightBoxIsOpen: false,
    })
  }

  renderImage(image) {
    const imageKey = 'image_' + image
    const ImageComponent = this.images[imageKey]

    if (!this.state.lightBoxIsOpen) {
      return (
        <div className="QuestionImage" onClick={() => this.setState({ lightBoxIsOpen: true })}>
          Bild ansehen
        </div>
      )
    } else {
      return (
        <div className="ImageOverlay" onClick={() => this.setState({ lightBoxIsOpen: false })}>
          <img src={ImageComponent} className={'ImageOverlay-Image'} alt="imageKey" />
        </div>
      )
    }
  }

  render() {
    if (this.props.viewProgress === true) {
      return <Review examProgress={this.props.examProgress} numberOfQuestions={this.props.numberOfQuestions} />
    } else if (this.props.examCompleted === true) {
      return <Results examProgress={this.props.examProgress} numberOfQuestions={this.props.numberOfQuestions} />
    } else {
      return (
        <Questions
          question={this.props.question}
          showAnswer={this.props.showAnswer}
          selectedAnswer={this.props.selectedAnswer}
          onAnswerSelected={this.props.onAnswerSelected}
          displayAnswers={this.props.displayAnswers}
          renderImage={this.renderImage}
          headerColor={'redHeader'}
        />
      )
    }
  }
}

export default Exam
