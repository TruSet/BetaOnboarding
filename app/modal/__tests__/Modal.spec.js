import React from 'react'
import {WalkthroughModal as Modal} from '../index'
import {mountWithTheme} from '../../App.spec'

describe('testing the modal', () => {
  const modalRoot = global.document.createElement('div')
  modalRoot.setAttribute('id', 'modal-portal')
  const body = global.document.querySelector('body')
  body.appendChild(modalRoot)
  let component = mountWithTheme(<Modal/>)

  it('should render each step individually', () => {
    expect(component.find('ProcessOverview').exists()).toBeTruthy()
    expect(component.find('Form').exists()).toBeFalsy()
    expect(component.find('Thanks').exists()).toBeFalsy()
    component.setState({step: 1})
    expect(component.find('ProcessOverview').exists()).toBeFalsy()
    expect(component.find('Form').exists()).toBeTruthy()
    expect(component.find('Thanks').exists()).toBeFalsy()
    component.setState({step: 2})
    expect(component.find('ProcessOverview').exists()).toBeFalsy()
    expect(component.find('Form').exists()).toBeFalsy()
    expect(component.find('Thanks').exists()).toBeTruthy()
  })
})
