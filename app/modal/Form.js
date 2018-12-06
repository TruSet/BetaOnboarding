import React, {Component} from 'react'
import injectSheet from 'react-jss'
// import DateTime from 'luxon'
import {Button, TextField} from '@material-ui/core'
import Select from 'react-select'
import {AsYouType, parseNumber} from 'libphonenumber-js'
import {modalStyles} from './styles'
import theme from '../theme'
import countries from './countries'
import {jsonPost} from '../api'


let options = Object
  .entries(countries)
  .map(([code, value]) => ({
    code,
    label: value
  }))

const styles = theme => ({
  ...modalStyles(theme),
  root: {
    alignItems: 'center',
    display: 'grid',
    gridGap: '8px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 50px auto auto',
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
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.9em',
    gridColumn: '1 / 3',
    height: '100%',
    justifyContent: 'flex-start',
    lineHeight: '1.3em',
    padding: '0 0 0 6px',
  },
  checkboxText: {
    fontSize: '13px',
    fontWeight: 'bold',
  },
  error: {
    color: theme.palette.accent.red,
    gridColumn: '1 / 3',
    justifySelf: 'center',
  },
  input: {
    flex: '1 1 auto',
    lineHeight: '1em',
    padding: '4px 0 4px 6px',
  },
  phoneInput: {
    alignItems: 'baseline',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  submitButton: {
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    justifySelf: 'center',
    width: '45%'
  }
})

const selectStyles = {
  container: (base) => ({
    ...base,
    fontFamily: 'Glober, Muli, Asap, Roboto, sans-serif',
    fontSize: '0.95rem',
    marginRight: '12px'
  }),
  control: (base) => ({
    ...base,
    borderRadius: '2px',
    height: '40px',
    minHeight: '30px',
    minWidth: '180px'
  }),
  option: (base) => ({
    ...base,
    backgroundColor: 'white',
    color: 'black',
  }),
  placeholder: (base) => ({
    ...base,
    ...theme.typography.body1
  }),
  singleValue: (base) => ({
    ...base,
    color: 'black',
  })
}

// https://stackoverflow.com/a/46181/3735060
const validateEmail = email =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(email)

class form extends Component {
  state = {
    code: 'US',
    country: 'United States',
    email: '',
    family: '',
    given: '',
    loading: false,
    phone: '',
    terms: false,
    updates: false,
    username: '',
  }

  handleChange = ({target: {checked, name, type, value}}) =>
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
      error: '',
    })

  toggle = name => () => this.setState({error: '', [name]: !this.state[name]})

  handleSelectChange = ({code = 'US', label = 'United States'}) =>
    this.setState({code, country: label, error: ''}, () => {
      this.handlePhoneChange({target: {value: this.state.phone}})
    })

  handlePhoneChange = ({target: {value}}) => {
    const formatter = new AsYouType(this.state.code)
    let newValue = formatter.input(value)
    // this keeps backspace from getting stuck when the caret hits ")"
    if (newValue === this.state.phone) {
      newValue = value
    }
    this.setState({
      phone: newValue,
      error: '',
    }, () => {
      const parsed = parseNumber(newValue, this.state.code, {extended: true})
      if (parsed.valid) {
        const codeValue = `+${parsed.countryCallingCode} ${newValue}`
        const isValid = parseNumber(codeValue, this.state.code, {extended: true}).valid
        this.setState({
          phone: isValid ? codeValue : newValue,
          error: '',
        })
      }
    })
  }

  submit = () => {
    const {code, country, email, family, given, loading, phone, terms, updates, username} = this.state
    const validEmail = email && validateEmail(email)
    const validPhone = phone && parseNumber(phone, code, {extended: true}).valid
    if (!loading) {
      if (given && family && phone && validEmail && validPhone && terms) {
        // 'https://truset-new-user-service.herokuapp.com/user/new'
        // http://localhost:8000/user/new
        this.setState({loading: true})
        fetch('https://truset-new-user-service.herokuapp.com/user/new', jsonPost({
          country,
          email,
          family,
          given,
          phone,
          updates,
          username
        }))
          .then(() => {
            localStorage.setItem('email', email)
            this.setState({loading: false})
            this.props.move()
          })
          .catch(() => {
            this.setState({
              error: 'There was an error saving your information. Please try again later.',
              loading: false,
            })
          })
      } else {
        this.setState({error: 'Please accept the terms and provide a valid email address, phone number, and name.'})
      }
    }
  }

  render() {
    const {classes, close} = this.props
    const {code, country, email, error, family, given, loading, phone, terms, updates, username} = this.state
    return (
      <div className={classes.root}>
        <h2 style={{gridColumn: '1 / 3'}}>Apply for TruSet Beta Access</h2>
        <TextField className={classes.input}
          style={{gridColumn: '1 / 2'}}
          label='Given Name' margin='dense'
          name='given' value={given} onChange={this.handleChange} />
        <TextField className={classes.input}
          style={{gridColumn: '2 / 3'}}
          label='Family Name' margin='dense'
          name='family' value={family} onChange={this.handleChange} />
        <TextField className={classes.input}
          style={{gridColumn: '1 / 3'}}
          label='Email' margin='dense'
          name='email' value={email} onChange={this.handleChange} />
        <div className={classes.phoneInput} style={{gridColumn: '1 / 3'}}>
          <Select styles={selectStyles} placeholder='Country'
            value={{code, label: country}} options={options} onChange={this.handleSelectChange} />
          <TextField className={classes.input}
            label='Phone Number' margin='dense'
            name='phone' value={phone} onChange={this.handlePhoneChange} />
        </div>
        <TextField className={classes.input}
          style={{gridColumn: '1 / 3'}}
          label='Preferred Username' margin='dense'
          name='username' value={username} onChange={this.handleChange} />
        <div className={classes.checkBox} onClick={this.toggle('terms')}>
          <input type="checkbox" style={{padding: '0 12px 0 6px'}} checked={terms} />
          &nbsp;
          <div className={classes.checkboxText}>
            I accept the TruSet <a
              href="/terms-of-use/" target="_blank" rel="noopener noreferrer">Terms of Use</a> & <a
                href="/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>
        </div>
        <div className={classes.checkBox} onClick={this.toggle('updates')}>
          <input type="checkbox" style={{padding: '0 12px 0 6px'}} checked={updates} />
          &nbsp;
          <div style={{width: '95%'}}>
            <div className={classes.checkboxText}>I want to receive important email updates and offers from TruSet. (We
              respect your email privacy.)
            </div>
            <div style={{fontSize: '11px'}}>You may change your mind ay any time by contacting us at info@truset.com or
              unsubscribe via a link in
              any of our emails.
            </div>
          </div>
        </div>
        <Button className={classes.cancelButton} onClick={close}
          variant='outlined'>
          Cancel
        </Button>
        <Button className={classes.submitButton} onClick={this.submit}
          disabled={loading} variant='contained' color='primary'>
          {loading ? 'Loading...' : 'Submit'}
        </Button>
        <div className={classes.error}>{error}</div>
      </div>
    )
  }
}

const Form = injectSheet(styles)(form)
Form.displayName = 'Form'

export default Form
