import React from 'react'
import injectSheet from 'react-jss'
import LogoBlack from '../static/TruSet Beta Logotype black'

const styles = {
    root: {
        color: 'red'
    }
}

export default injectSheet(styles)(({classes, move}) =>
  <div className={classes.root}>
    <LogoBlack height={100} width={150}/>
    <h2>Thanks for your application!</h2>
    <div>Look out for an email from our team within the next few days granting access.</div>
    <div>
      In the meantime, check out MetaMask if you dont already have it installed, as you will need it to access our
      application.
    </div>
    <div onClick={move(1)}>close</div>
  </div>
)
