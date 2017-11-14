import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Quiz from './components/Quiz/Quiz'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Quiz}/>
          <Route path='/quiz' component={Quiz}/>
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
