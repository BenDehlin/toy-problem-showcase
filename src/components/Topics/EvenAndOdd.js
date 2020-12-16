import React, { Component } from "react"

class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
        input: '',
        evens: [],
        odds: []
    }
  }

  submit = () => {
      const {evens, odds, input} = this.state
      let num = parseInt(input)
      num % 2 === 0 ? evens.push(num) : odds.push(num)
      this.setState({evens, odds, input: ''})
  }

  render() {
    return (
      <div>
        <h1>Even and Odd</h1>
        <div className="input-area">
        <input
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button onClick={this.submit}>Submit</button>
        </div>
        <div className="evens-array">
            <label>Evens:</label>
            {this.state.evens.map((e, i) => (
                <div className="array-item" key={i}>
                    {e}
                </div>
            ))}
        </div>
        <div className="odds-array">
            <label>Odds:</label>
            {this.state.odds.map((e, i) => (
                <div className="array-item" key={i}>
                    {e}
                </div>
            ))}
        </div>
      </div>
    )
  }
}

export default EvenAndOdd
