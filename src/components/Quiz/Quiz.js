import React from 'react';
import './quiz.css';
import Lightbox from 'react-image-lightbox'
import GameOver from './GameOver'
import QuestionOverviewContainer from './QuestionOverview/QuestionOverviewContainer'
import Questions from './Questions'

class Quiz extends React.Component {
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
          <QuestionOverviewContainer
            restart={this.props.restart}
            progress={this.props.progress}
            incorrect={this.props.incorrect}
            numberOfQuestions={this.props.numberOfQuestions}
          />
        )
      } else if (this.props.completed === true) {
        return (
          <div className="Container">
            <div className="QuizContainer">
              <GameOver
                restart={this.props.restart}
                progress={this.props.progress}
                numberOfQuestions={this.props.numberOfQuestions}
              />
            </div>
          </div>
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
            maxNumberQuestions={this.props.numberOfQuestions}
          />
      )
    }
  }
}

export default Quiz
