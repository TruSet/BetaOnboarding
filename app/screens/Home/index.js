import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {Button} from '@material-ui/core'
import {WalkthroughModal} from '../../modal'


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
  button: {
    padding: '24px 34px',
  },
  buttonText: {
    fontFamily: 'Asap, Muli, sans-serif',
    fontSize: '21px',
    fontStyle: 'italic',
    textTransform: 'none',
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

  toggleModal = modal => () => this.setState({modal})

  render() {
    const {classes} = this.props
    const {modal} = this.state
    return (
      <div className={classes.root}>
        {modal && <WalkthroughModal close={this.toggleModal(false)}/>}
        <div>
          {!localStorage.getItem('applied')
            ? <Button variant='contained' color='primary'
                      classes={{
                        root: classes.button,
                        label: classes.buttonText,
                      }}
                      onClick={this.toggleModal(true)}>
              Join the TruSet Token Beta Community
            </Button>
            : <span className={classes.thanks}>thanks for applying!</span>}
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(home)

