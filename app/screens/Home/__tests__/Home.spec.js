import React from 'react'
import Home from '../index.js'
import {mountWithTheme} from '../../../App.spec'

describe('<Home />', () => {
  const component = mountWithTheme(<Home/>)
  expect(component).toMatchSnapshot()
  it('should render a modal when the button is clicked', () => {
    const modalRoot = global.document.createElement('div')
    modalRoot.setAttribute('id', 'modal-portal')
    const body = global.document.querySelector('body')
    body.appendChild(modalRoot)
    expect(component.find('div.walkthroughModal-background-0-1-3').exists()).toBe(false)
    component.setState({modal: true})
    expect(component.find('div.walkthroughModal-background-0-1-3').exists()).toBe(true)
    component.setState({modal: false})
  })
  it('should thank the user once application is done', () => {
    localStorage.setItem('applied', 'true')
    expect(component.find('.home-thanks-0-1-2')).toBeDefined()
  })
})
