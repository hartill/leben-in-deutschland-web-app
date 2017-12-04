import React from 'react'
import './FooterQc.css'

class FooterQc extends React.Component {
  render () {
    return (
      <div className="Footer">
        <button className='AQNextButton' onClick={this.props.nextQuestion} key='2'>
          <img src ={require("./../../../svg/forwards-arrow.svg")} alt='next-question' />
        </button>
      </div>
    )
  }
}

export default FooterQc
