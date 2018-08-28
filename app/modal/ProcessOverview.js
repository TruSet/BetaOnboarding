import React from 'react'
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button'
import LogoBlack from '../static/TruSet Beta Logotype black'
import {modalStyles} from './styles'

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
    width: 150,
  },
  step: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '3em auto',
    margin: '20px 0',
  },
  subTitle: {},
  title: {
    fontWeight: 'bold'
  },
})
const ProcessOverview = injectSheet(styles)(({classes, move}) =>
  <div className={classes.root}>
    <LogoBlack height={100} width={150}/>
    <h2 style={{alignSelf: 'flex-start'}}>Apply for TruSet Beta Access</h2>
    <div>
      We are looking for individuals to publish and validate documentation for token projects. We take our
      community seriously – before you can join TruSet and start earning money, we will need to first verify
      your contact information.
    </div>
    <div className={classes.step}>
      <div className={classes.icon}>1</div>
      <div className={classes.title}>Quick apply</div>
      <div className={classes.subTitle}>Apply with your name and email address</div>
    </div>
    <div className={classes.step}>
      <div className={classes.icon}>2</div>
      <div className={classes.title}>Wait for confirmation and access</div>
      <div className={classes.subTitle}>First access will be given on {}</div>
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
