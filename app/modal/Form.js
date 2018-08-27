import React, {Component} from 'react'
import injectSheet from 'react-jss'
// import DateTime from 'luxon'
import Button from '@material-ui/core/Button'
import {modalStyles} from './styles'

const styles = theme => ({
  ...modalStyles(theme),
  root: {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
    height: '100%',
    marginBottom: 18,
  },
  cancelButton: {
    cursor: 'pointer',
    justifySelf: 'center',
    width: '45%'
  },
  checkBox: {
    alignItems: 'center',
    backgroundColor: '#efefef',
    display: 'flex',
    fontSize: '0.9em',
    gridColumn: '1 / 3',
    height: '1.8em',
    marginBottom: 18,
    padding: '18px 6px',
  },
  error: {
    color: theme.palette.accent.red,
    gridColumn: '1 / 3',
    justifySelf: 'center',
  },
  input: {
    border: '1px solid black',
    gridColumn: '1 / 3',
    lineHeight: '1.5em',
    margin: '6px 0 18px 0',
    padding: '4px 0 4px 6px',
  },
  submitButton: {
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    justifySelf: 'center',
    width: '45%'
  }
})

// https://stackoverflow.com/a/46181/3735060
const validateEmail = email =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email)

class form extends Component {
  state = {
    email: '',
    name: '',
    updates: false,
  }

  handleChange = ({target: {checked, name, type, value}}) =>
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
      error: ''
    })

  submit = () => {
    const {name, email} = this.state
    if (name && email && validateEmail(email)) {
      // post the user info to a server that will send emails and
      // eslint-disable-next-line no-undef
      // _cio.identify({
      //   id: Math.random().toString().substring(2, 6) + Math.random().toString().substring(2, 6),
      //   email: this.state.email,
      //   created_at: new DateTime({}).ts,
      //   first_name: this.state.name,
      // })
      localStorage.setItem('applied', 'true')
      this.props.move()
    } else {
      this.setState({error: 'Please provide a valid email address and name.'})
    }
  }

  render() {
    const {classes, close} = this.props
    const {email, error, name, updates} = this.state
    return (
      <div className={classes.root}>
        <h2 style={{gridColumn: '1 / 3'}}>Apply for TruSet Beta Access</h2>
        <input type="text" placeholder='Name'
               className={classes.input}
               name='name' value={name} onChange={this.handleChange}/>
        <input type="text" placeholder='Email'
               className={classes.input}
               name='email' value={email} onChange={this.handleChange}/>
        <label htmlFor="updates" className={classes.checkBox}>
          <input type="checkbox" name='updates' checked={updates} onChange={this.handleChange}/>
          &nbsp;
          I would like TruSet to save my email for future updates.
        </label>
        <Button className={classes.cancelButton} onClick={close}
                variant='outlined'>
          Cancel
        </Button>
        <Button onClick={this.submit} className={classes.button}
                variant='contained' color='primary'>
          Submit
        </Button>
        <div className={classes.error}>{error}</div>
      </div>
    )
  }
}

export default injectSheet(styles)(form)
