import React from 'react'
import './aQFooter.css'

class AQFooter extends React.Component {
  constructor(props){
    super(props)
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    let output=[]
    if (this.props.viewProgress) {
      output.push(
        <button className='AQNextButton' onClick={this.props.nextQuestion} key='2'>
          <img src ={require("./../../../static/icons/next-qu-icon.svg")} alt='next-question' />
        </button>
      )
    } else if (this.props.showAnswer) {
      output.push(
        <button className='AQNextButton' onClick={this.props.nextQuestion} key='2'>
          <img src ={require("./../../../static/icons/next-qu-icon.svg")} alt='next-question' />
        </button>
      )
    } else {
      output.push(
        <div className='AQNextButton AQDeactive' key='2'>
          <img src ={require("./../../../static/icons/next-qu-icon.svg")} alt='next-question' />
        </div>
      )
    }
    return output
  }

  render () {
    return (
      <div className="Footer">
        {this.renderButton()}
      </div>
    )
  }
}

export default AQFooter
