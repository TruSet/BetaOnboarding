import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {Button} from '@material-ui/core'
import {WalkthroughModal} from '../../modal'
import config from '../../config'

// const mobileWidth = 1024

const styles = theme => ({
  root: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-around',
    height: 130,
    width: '100%',
  },
  thanks: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
})

class home extends Component {
  state = {
    modal: false,
  }

  DEVCLEAR = () => {
    localStorage.clear()
    this.forceUpdate()
  }

  toggleModal = modal => () => this.setState({modal})

  render() {
    const {classes} = this.props
    const {modal} = this.state
    return (
      <div className={classes.root}>
        {modal && <WalkthroughModal close={this.toggleModal(false)}/>}
          <h3>TruSet Beta</h3>
          <div onClick={this.DEVCLEAR}>
            {!localStorage.getItem('applied')
              ? <Button variant='outlined' onClick={this.toggleModal(true)}>Apply Now</Button>
              : <span className={classes.thanks}>thanks for applying!</span>}
          </div>
          <h4>Begins {config.launchDate}</h4>
      </div>
    )
  }
}

export default injectSheet(styles)(home)

