import React from 'react'
import injectSheet from 'react-jss'
import {modalStyles} from './styles'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  ...modalStyles(theme),
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cancelButton: {
    margin: '12px 0',
  }
})

const Thanks = injectSheet(styles)(({classes, close}) =>
  <div className={classes.root}>
    <img src="/truset_logotype.png" alt="" />
    <h2 style={{alignSelf: 'flex-start'}}>We will be in touch soon!</h2>
    <div>
      An activation link has been sent to{' '}
      {localStorage.getItem('email') || 'the email address you provided'}.
    </div>
    <br />
    <br />
    <Button className={classes.cancelButton} onClick={close} variant="outlined">
      Close
    </Button>
  </div>
)

Thanks.displayName = 'Thanks'

export default Thanks
