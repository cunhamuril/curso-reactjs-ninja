'use strict'
import React, { Component } from 'react'

import Square from './square'
import Title from './title'

class App extends Component {
  render() {
    return (
      <div className='container' onClick={e => {
        alert('clicou')
      }}>
        <Title
          name='Murilo'
        // lastName='Cunha'
        />

        <Square
        // color='blue' 
        />

        {['#FF00FF', '#FFFF00', '#FF00FF'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title
//           name='Murilo' lastName='Cunha'
//         />
//       </div>
//     )
//   }
// })

export default App
