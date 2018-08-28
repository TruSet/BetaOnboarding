import React, {Component} from 'react'
import {createPortal} from 'react-dom'
import injectSheet from 'react-jss'
import {Card, CardContent, CardHeader, IconButton} from '@material-ui/core'
import {Close} from '@material-ui/icons'
import ProcessOverview from './ProcessOverview'
import Form from './Form'
import Thanks from './Thanks'
import {modalStyles} from './styles'


class walkthroughModal extends Component {
  state = {
    step: 0
  }
  modalRoot = document.getElementById('modal-portal')

  move = i => () => this.setState(({step}) => ({step: step + i}))

  render() {
    const {classes, close} = this.props
    const {step} = this.state
    if (step > 2) {
      localStorage.setItem('applied', 'true')
      close()
    }
    if (step < 0) {
      close()
    }
    return createPortal(
      <div className={classes.background} onClick={close}>
        <Card className={classes.modalBody} onClick={e => e.stopPropagation()}>
          <CardHeader
            action={
              <IconButton onClick={close}>
                <Close/>
              </IconButton>}/>
          <CardContent className={classes.content}>
            {step === 0 && <ProcessOverview move={this.move} {...this.props}/>}
            {step === 1 && <Form move={this.move(1)} {...this.props}/>}
            {step === 2 && <Thanks move={this.move} {...this.props}/>}
          </CardContent>
        </Card>
      </div>,
      this.modalRoot
    )
  }

}

export const WalkthroughModal = injectSheet(modalStyles)(walkthroughModal)
