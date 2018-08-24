import React from 'react'
import injectSheet from 'react-jss'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const mobileWidth = 512

const styles = theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: 'rgb(36, 36, 36)',
    borderBottom: '1px solid rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    padding: '0 20px',
    position: 'fixed',
    width: '100%',
    [`@media(max-width: ${mobileWidth}px)`]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    }
  },
  menuItems: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: 700,
    height: '100%',
    justifyContent: 'space-around',
    maxWidth: 400,
    maxHeight: 70,
    minWidth: 280,
    width: '40%',
    [`@media(max-width: ${mobileWidth}px)`]: {
      maxHeight: 40,
      width: '100%',
    },
    '& a': {
      alignItems: 'center',
      backgroundColor: 'transparent',
      color: theme.palette.common.white,
      cursor: 'pointer',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      textDecoration: 'none',
      width: '100%',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      }
    }
  },
  logInButton: {
    letterSpacing: '0.1em'
  }
})

const nav = ({classes}) =>
  <div className={classes.root}>
    <div className={classes.menuItems}>
      <Link to='/'>TruSet Beta</Link>
      <Link to='/tech'>Technology</Link>
    </div>
    <a href='https://sections-staging.truset.com/'
       target='_blank' rel='noopener noreferrer'
       style={{textDecoration: 'none', color: 'inherit'}}>
      <Button variant="contained" color='primary' className={classes.logInButton}>
        Log in with MetaMask
      </Button>
    </a>
  </div>

export default injectSheet(styles)(nav)
