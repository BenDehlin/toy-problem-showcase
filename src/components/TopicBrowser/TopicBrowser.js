import React, { Component } from "react"
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'

class TopicBrowser extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
    </div>
  }
}

export default TopicBrowser
