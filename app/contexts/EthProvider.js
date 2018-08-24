import React, {Component} from 'react'
import Eth from 'ethjs'
import EthContext from './EthContext'

export default class EthProvider extends Component {
  state = {
    loading: true,
    users: [],
  }

  async componentDidMount() {
    const ethOptions = {interval: 3000}
    if (
      typeof window.web3 !== 'undefined' &&
      typeof window.web3.currentProvider !== 'undefined'
    ) {
      this.eth = new Eth(window.web3.currentProvider, ethOptions)
    }
    window.eth = this.eth
    // if (this.eth) {
    //  do eth things
    // }
    this.setState({loading: false})
  }

  render() {
    return (
      <EthContext.Provider value={{}}>
        {!this.eth && !this.state.loading
          ? <div>replace this with a call to download metamask?</div>
          : this.state.loading
            ? <div>replace this with an indication that contract stuff is still loading</div>
            : this.props.children}
      </EthContext.Provider>
    )
  }
}

