import React from 'react'
import Form from '../Form'
import {mountWithTheme} from '../../App.spec'

xdescribe('<Form/>', () => {
  const component = mountWithTheme(<Form/>)
  expect(component).toMatchSnapshot()
  it('should render an error', () => {
    const error = 'this is an error message'
    component.setState({error})
    console.log(component.find('.form-error-0-1-29').text())
    expect(component.find('.form-error-0-1-29').text()).toBe(error)
  })
})
