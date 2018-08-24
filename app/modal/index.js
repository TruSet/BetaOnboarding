import React, {Component} from 'react'
import {createPortal} from 'react-dom'
import injectSheet from 'react-jss'
import {Card, CardContent, CardHeader, IconButton} from '@material-ui/core'
import {Close} from '@material-ui/icons'
import ProcessOverview from './ProcessOverview'
import Form from './Form'
import Thanks from './Thanks'


const styles = {
  background: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 0,
  },
  modalBody: {
    backgroundColor: '#fff',
    padding: 10,
    width: '80%',
    maxWidth: 480,
    minHeight: 600,
    zIndex: 11,
  },
}

const modalRoot = document.getElementById('modal-portal')

class walkthroughModal extends Component {
  state = {
    step: 0
  }
  el = document.createElement('div')

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  move = i => () => this.setState(({step}) => ({step: step + i}))

  render() {
    const {classes, close} = this.props
    const {step} = this.state
    if (step > 2) {
      localStorage.setItem('applied', 'true')
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
            {step === 0 && <ProcessOverview move={this.move}/>}
            {step === 1 && <Form move={this.move}/>}
            {step === 2 && <Thanks move={this.move}/>}
          </CardContent>
        </Card>
      </div>,
      this.el
    )
  }

}

export const WalkthroughModal = injectSheet(styles)(walkthroughModal)
