import React from 'react'
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button'
import {modalStyles} from './styles'
import Logo from '../static/trueset_logotype.png'

const styles = theme => ({
  ...modalStyles(theme),
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  icon: {
    alignItems: 'center',
    border: '1px solid #000000',
    borderRadius: '50%',
    display: 'flex',
    gridRow: '1 / 3',
    height: '2.5em',
    justifyContent: 'center',
    width: '2.5em',
  },
  logo: {
    marginBottom: 15,
    width: 150,
  },
  step: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '3em auto',
    margin: '20px 0',
    maxHeight: 90,
  },
  subTitle: {},
  title: {
    fontWeight: 'bold'
  },
})
const ProcessOverview = injectSheet(styles)(({classes, move}) =>
  <div className={classes.root}>
    <img src={Logo} alt="" className={classes.logo}/>
    <h2 style={{alignSelf: 'flex-start'}}>Apply for TruSet Beta Access</h2>
    <div>
      Work with TruSet to publish and review reference data for token projects and earn potential rewards for your contributions.
      We take our community seriously, so before you can join TruSet and start earning rewards, we will need to first verify your contact information.
    </div>
    <div className={classes.step}>
      <div className={classes.icon}>1</div>
      <div className={classes.title}>Quickly apply</div>
      <div className={classes.subTitle}>Apply with your name, email, and phone number.</div>
    </div>
    <div className={classes.step}>
      <div className={classes.icon}>2</div>
      <div className={classes.title}>Wait for a welcome email</div>
      <div className={classes.subTitle}>
        We will send a welcome email once the Beta launches.
        You will need to verify your contact info for access.
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 12, width: '100%'}}>
      <Button onClick={move(-1)} className={classes.button}
              variant='outlined'>
        cancel
      </Button>
      <Button onClick={move(1)} className={classes.button}
              variant='contained' color='primary'>
        apply
      </Button>
    </div>
  </div>
)
ProcessOverview.displayName = 'ProcessOverview'
export default ProcessOverview
