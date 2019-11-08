'use strict'
import React, { Component } from 'react'

import Button from './button'
import Square from './square'

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'gray'
    }
  }

  render() {
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
      </div>
    )
  }
}

export default App
