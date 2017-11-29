import React from 'react'
import Lightbox from 'react-image-lightbox'
import AQOverview from './AQOverview'
import Questions from './../Quiz/Questions'

class AllQuestions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lightBoxIsOpen: false
    }
    this.renderImage = this.renderImage.bind(this)
  }

  componentWillMount() {
    this.setState({
      lightBoxIsOpen: false,
    })
  }

  renderImage(image) {
    let lightBoxIsOpen = this.state.lightBoxIsOpen
    return (
      <div className="QuestionImage" onClick={() => this.setState({ lightBoxIsOpen: true })}>
        <p>
          Bild ansehen
        </p>
      {lightBoxIsOpen &&
      <Lightbox
          mainSrc={image}
          onCloseRequest={() => this.setState({ lightBoxIsOpen: false })}
          onMovePrevRequest={() => {}}
          onMoveNextRequest={() => {}}
      />
      }
      </div>
    )
  }

  render () {
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
