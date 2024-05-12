// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  coinTossMachine = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }

    this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
  }

  render() {
    const {totalCount, heads, tails, imageUrl} = this.state
    return (
      <div className="appContainer">
        <div className="cardContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="operation">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coinImage" />
          <button
            className="tossCoin"
            type="button"
            onClick={this.coinTossMachine}
          >
            Toss Coin
          </button>
          <div className="countBoard">
            <p className="totalCount">Total: {totalCount}</p>
            <p className="headsCount">Heads: {heads}</p>
            <p className="tailsCount">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
