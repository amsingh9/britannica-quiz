import React, { Component } from 'react';
import Aboutus from './AboutUs/Aboutus'
import {Route, Switch} from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './HomePage/Homepage'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/take-quiz' component={Homepage}/>
            <Route path='/about-us' component={Aboutus}/>
            <Route path='/' component={Homepage}/>
          </Switch>  
        </Layout>
      </div>
    );
  }
}

export default App;
