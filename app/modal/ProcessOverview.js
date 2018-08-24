import React from 'react'
import injectSheet from 'react-jss'
import LogoBlack from '../static/TruSet Beta Logotype black'

const styles = {
  root: {},
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
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '3em auto'
  },
  subTitle: {},
  title: {
    fontWeight: 'bold'
  },

}

export default injectSheet(styles)(({classes, move}) =>
  <div className={classes.root}>
    <LogoBlack height={100} width={150}/>
    <h2>Apply for TruSet Beta Access</h2>
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
    <div onClick={move(1)}>adsf</div>
  </div>
)
