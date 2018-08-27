import React from 'react'
import ReactDOM from 'react-dom'
import {Root} from './App'
import theme from './theme'
import {MuiThemeProvider} from '@material-ui/core/styles'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root/>
  </MuiThemeProvider>,
  document.getElementById('root')
)
