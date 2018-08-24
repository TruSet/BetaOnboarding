import React from 'react'
import ReactDOM from 'react-dom'
import {Root} from './App'
import theme from './theme'
import EthProvider from './contexts/EthProvider'
import {MuiThemeProvider} from '@material-ui/core/styles'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <EthProvider>
      <Root/>
    </EthProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
