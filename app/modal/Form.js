import React, {Component} from 'react'
import injectSheet from 'react-jss'

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '',
    gridTemplateRows: '',
  }
}


class form extends Component {
  state = {
    email: '',
    name: '',
    updates: false,
  }

  submit = () => {
    localStorage.setItem('applied', 'true')
    this.props.move(1)()
  }

  render() {
    const {classes, move} = this.props
    const {email, name, updates} = this.state
    return (
      <div className={classes.root}>
        <h2>Apply for TruSet Beta Access</h2>
        <div>
          Some body text.
        </div>
        <input type="text" placeholder='Name' value={name}/>
        <input type="text" placeholder='Email' value={email}/>
        <input type="checkbox" value={updates}/>
        <span onClick={move(-1)}>back</span>
        <span onClick={this.submit}>submit</span>
      </div>
    )
  }
}

export default injectSheet(styles)(form)
