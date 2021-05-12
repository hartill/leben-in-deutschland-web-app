import React from 'react'
import AQOverview from './AQOverview'
import Questions from './../Quiz/Questions'

class AllQuestions extends React.Component {
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
      return (
        <AQOverview
          restart={this.props.restart}
          progress={this.props.progress}
          incorrect={this.props.incorrect}
          numberOfQuestions={this.props.numberOfQuestions}
          handleQuestionSelected={this.props.handleQuestionSelected}
          question={this.props.question}
        />
      )
    } else {
      return (
        <Questions
          question={this.props.question}
          showAnswer={this.props.showAnswer}
          selectedAnswer={this.props.selectedAnswer}
          onAnswerSelected={this.props.onAnswerSelected}
          progress={this.props.progress}
          displayAnswers={this.props.displayAnswers}
          renderImage={this.renderImage}
          headerColor={'greenHeader'}
        />
      )
    }
  }
}

export default AllQuestions
