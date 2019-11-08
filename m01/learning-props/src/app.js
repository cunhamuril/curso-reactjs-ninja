'use strict'
import React from 'react'

import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Murilo' lastName={{ first: 'Santos', last: 'Cunha' }} />
      </div>
    )
  }
})

export default App
