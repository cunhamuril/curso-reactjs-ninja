'use strict'
import React, { Component } from 'react'

import Button from './button'
// import Square from './square'
// import Timer from './timer'

class App extends Component {
  // constructor() {
  //   console.log('constructor')
  //   super()
  //   this.state = {
  //     color: 'gray',
  //     time: 0,
  //     showTimer: true
  //   }
  // }

  // componentWillMount() {
  //   console.log('componentWillMount app')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount app')
  // }

  // render() {
  //   console.log('render app')
  //   const colors = ['red', 'green', 'blue', 'black', 'gold']

  //   return (
  //     <div>
  //       <Square color={this.state.color} />
  //       {colors.map(color => (
  //         <Button
  //           key={color}
  //           handleClick={() => this.setState({ color })}
  //         >
  //           {color}
  //         </Button>
  //       ))}

  //       {/* Esta linha debaixo é como se fosse um operador binário (if) */}
  //       {this.state.showTimer && <Timer time={this.state.time} />}

  //       <button onClick={() => {
  //         this.setState({ showTimer: !this.state.showTimer })
  //       }}>Show / hide timer</button>

  //       <button onClick={() => {
  //         this.setState({ time: this.state.time + 1 })
  //       }}>Change props</button>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        <Button handleClick={() => console.log('clicou')}>
          Clique em mim
        </Button>
      </div>
    )
  }
}

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired // apenas function é permitida passar na prop handleClick
  // isRequired significa que é uma prop é obrigatória
}

export default App
