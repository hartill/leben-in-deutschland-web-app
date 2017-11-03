import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Quiz from './components/Quiz/Quiz'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: 'James',
      progress: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Quiz user={this.state.user} progress={this.state.progress} question={this.state.currentQuestion}/>
        <Footer />
      </div>
    );
  }

}

export default App;
