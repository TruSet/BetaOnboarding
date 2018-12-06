import {hot} from 'react-hot-loader'
import Home from './screens/Home'
import {MuiThemeProvider} from '@material-ui/core'
import theme from './theme'
import React from 'react'


const App = () =>
  <MuiThemeProvider theme={theme}>
    <Home />
  </MuiThemeProvider>

export default hot(module)(App)
