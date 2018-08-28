import React from 'react'
import ReactDOM from 'react-dom'
import {MuiThemeProvider} from '@material-ui/core'
import {mount, shallow} from 'enzyme'
import App from './App'
import theme from './theme'

export const mountWithTheme = component => {
  const context = shallow(<MuiThemeProvider theme={theme}>
    <div/>
  </MuiThemeProvider>)
    .instance()
    .getChildContext()

  const options = {
    context,
    childContextTypes: MuiThemeProvider.childContextTypes
}

  return mount(shallow(component, options).get(0), options)
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
