import React from 'react'
import {hot} from 'react-hot-loader'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Tech from './screens/Tech'
import Home from './screens/Home'
import Nav from './components/Nav'


const App = () =>
  <Router>
    <>
      <Nav/>
      <Switch>
        <Route path='/tech' component={Tech}/>
        <Route path='/launch' component={Home}/>
        <Route path='*' component={() => <Redirect to='/launch'/>}/>
      </Switch>
    </>
  </Router>

export const Root = hot(module)(App)
