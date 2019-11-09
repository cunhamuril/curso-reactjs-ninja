'use strict'
import React, { Component } from 'react'

import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      color: 'gray',
      time: 0,
      showTimer: true
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    const colors = ['red', 'green', 'blue', 'black', 'gold']

    return (
      <div>
        <Square color={this.state.color} />
        {colors.map(color => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}
          >
            {color}
          </Button>
        ))}

        {/* Esta linha debaixo é como se fosse um operador binário (if) */}
        {this.state.showTimer && <Timer time={this.state.time} />}

        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show / hide timer</button>

        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change props</button>
      </div>
    )
  }
}

export default App
