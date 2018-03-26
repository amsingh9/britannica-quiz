import React, { Component } from 'react';
import Aboutus from './AboutUs/Aboutus'
import {Route, Switch} from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './containers/HomePage/Homepage'
import QuizSection from './containers/QuizSection/QuizSection'
import Q1 from './containers/QuizSection/Questions/Q1'
import Q2 from './containers/QuizSection/Questions/Q2'
import Q3 from './containers/QuizSection/Questions/Q3'
import Q4 from './containers/QuizSection/Questions/Q4'
import Q5 from './containers/QuizSection/Questions/Q5'
import Q6 from './containers/QuizSection/Questions/Q6'
import ResultPage from './Result/Result'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/take-quiz' component={QuizSection}/>
            <Route path='/about-us' component={Aboutus}/>
            <Route path='/result' component={ResultPage}/>
            <Route path='/q1' component={Q1}/>
            <Route path='/q2' component={Q2}/>
            <Route path='/q3' component={Q3}/>
            <Route path='/q4' component={Q4}/>
            <Route path='/q5' component={Q5}/>
            <Route path='/q6' component={Q6}/>
            <Route path='/' component={Homepage}/>
          </Switch>  
        </Layout>
      </div>
    );
  }
}

export default App;
