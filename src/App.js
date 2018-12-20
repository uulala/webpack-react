import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  add() {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>{count}</h1>
        ssfs
        <button type="default" onClick={() => this.add()}>增加1</button>
      </div>
    )
  }
}
