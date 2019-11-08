'use strict'
import React, { Component } from 'react'

import Title from './title'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Title
          name='Murilo'
        // lastName='Cunha'
        />
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
