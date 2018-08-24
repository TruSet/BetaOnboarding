import React, {Component} from 'react'
import injectSheet from 'react-jss'
import Title from '../../components/Title'

// const mobileWidth = 1024

const styles = theme => ({
  root: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#efefef',
    display: 'flex',
    width: '100%',
  },
  cards: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: `calc(100vh - ${theme.custom.defaultTitleHeight}px)`
  },
  titleContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 460,
  }
})

class home extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Title>
          <div className={classes.titleContent}>
            some title content
          </div>
        </Title>
        <div className={classes.cards}>
          where cards went
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(home)

