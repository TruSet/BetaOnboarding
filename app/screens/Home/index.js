import React, {Component} from 'react'
import injectSheet from 'react-jss'
import {Button, Card, CardContent} from '@material-ui/core'
import LogoWhite from '../../static/TruSet Beta Logotype white'
import Title from '../../components/Title'
import {WalkthroughModal} from '../../modal'

// const mobileWidth = 1024

const styles = theme => ({
  root: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#efefef',
    display: 'flex',
    width: '100%',
  },
  callToAction: {
    alignItems: 'center',
    display: 'grid',
    gridGap: 12,
    gridTemplateRows: '1fr 1fr 1fr',
    margin: '20px 0',
    width: 375
  },
  card: {
    margin: '40px 20px 20px 0',
    minHeight: 400,
    width: 375,
  },
  cardContent: {},
  cards: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardImage: {
    backgroundColor: '#aaa',
    height: '100%',
  },
  cardText: {},
  cardTitle: {
    textAlign: 'center',
    marginBottom: 17,
    width: '100%'
  },
  copy: {
    color: '#a8a8a8',
    fontSize: 20,
    lineHeight: '26px',
    marginBottom: 12,
    padding: '0 4px',
    textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
    boxShadow: '0 0 24px 0 rgba(0,0,0,0.5)',
    display: 'flex',
    height: 106,
    justifyContent: 'center',
    marginBottom: 36,
    width: 106,
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
        <Title>
          <div className={classes.titleContent}>
            <div className={classes.logo}>
              <LogoWhite height={100} width={100}/>
            </div>
            <div className={classes.copy}>
              Building a quality source of documentation for all token projects – actively authored and validated by the
              TruSet community. Join the Beta today.
            </div>
          </div>
        </Title>
        <div className={classes.callToAction}>
          <h3>TruSet Beta</h3>
          <div onClick={this.DEVCLEAR}>
            {!localStorage.getItem('applied')
              ? <Button variant='outlined' onClick={this.toggleModal(true)}>Apply Now</Button>
              : 'thanks for applying!'}
          </div>
          <h4>Begins [date]</h4>
        </div>
        <div className={classes.cards}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <h3 className={classes.cardTitle}>
                $0,000 monthly ETH prize pool
              </h3>
              <div className={classes.cardText}>
                Every two-week period, a portion of a $0,000 prize will be given to the best performing community
                members.
              </div>
              <div className={classes.cardImage}>placeholder</div>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <h3 className={classes.cardTitle}>
                Compete for your share of the pool
              </h3>
              <div className={classes.cardText}>
                The prize is split proportional to the quality of contributions from each member.
              </div>
              <div className={classes.cardImage}>placeholder</div>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <h3 className={classes.cardTitle}>
                Earn contribution points to win
              </h3>
              <div className={classes.cardText}>
                Stake TRU points to publish new content or to validate others’ proposals. You will earn back your stake,
                plus additional earnings for quality contributions.
              </div>
              <div className={classes.cardImage}>placeholder</div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(home)

