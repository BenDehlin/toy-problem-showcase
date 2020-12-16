import React, { Component } from "react"

class Sum extends Component {
  constructor() {
    super()
    this.state = {
      numOne: "",
      numTwo: "",
      output: 0,
    }
  }

  add = () => {
    const { numOne, numTwo } = this.state

    this.setState({
      output: parseInt(numOne) + parseInt(numTwo),
      numOne: "",
      numTwo: "",
    })
  }

  render() {
    const { add } = this
    const { numOne, numTwo, output } = this.state
    console.log(typeof this.state.output)
    console.log(this.state.output)
    return (
      <div>
        <input
          value={numOne}
          onChange={(e) => this.setState({ numOne: e.target.value })}
        />
        <input
          value={numTwo}
          onChange={(e) => this.setState({ numTwo: e.target.value })}
        />
        <button onClick={add}>Add</button>
        <div className="display">
          Output:{" "}
          {output || output === 0 ? (
            <label>{output}</label>
          ) : (
            <label>"please enter a number"</label>
          )}
        </div>
      </div>
    )
  }
}

export default Sum
