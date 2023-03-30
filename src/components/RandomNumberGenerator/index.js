import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  onClickGenerateNum = () => {
    const newRandomNum = Math.ceil(Math.random() * 100)
    this.setState({randomNum: newRandomNum})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="app-cont">
        <div className="random-num-cont">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onClickGenerateNum}
          >
            Generate
          </button>
          <p className="number">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
