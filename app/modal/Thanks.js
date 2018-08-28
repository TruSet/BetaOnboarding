import React from 'react'
import injectSheet from 'react-jss'
import LogoBlack from '../static/TruSet Beta Logotype black'
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
    <LogoBlack height={100} width={150}/>
    <h2 style={{alignSelf: 'flex-start'}}>Thanks for your application!</h2>
    <div>Look out for an email from our team within the next few days granting access.</div>
    <div>
      In the meantime, check out MetaMask if you dont already have it installed, as you will need it to access our
      application.
    </div>
    <br/><br/>
    <Button className={classes.cancelButton} onClick={close} variant='outlined'>
      Close
    </Button>
  </div>
)

Thanks.displayName = 'Thanks'

export default Thanks
