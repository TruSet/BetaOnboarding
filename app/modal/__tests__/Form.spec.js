import React from 'react'
import Form from '../Form'
import {mountWithTheme} from '../../App.spec'

describe('<Form/>', () => {
  const component = mountWithTheme(<Form/>)
  expect(component).toMatchSnapshot()
  it('should render an error', () => {
    const error = 'this is an error message'
    component.setState({error})
    expect(component.find('div.form-error-0-1-8').text()).toBe(error)
  })
})
