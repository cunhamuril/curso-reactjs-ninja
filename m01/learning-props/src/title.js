'use strict'

import React from 'react'

const Title = ({ name, lastName }) => (
  <h1>Olá {`${name} ${lastName}`}!</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}

// const Title = React.createClass({
//   // objeto padrão do this.props caso não seja passada nenhuma propriedade
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastName: {
//         first: 'Sem',
//         last: 'Sobrenome'
//       }
//     }
//   },

//   render: function () {
//     return <h1>Olá {this.props.name + ' ' + this.props.lastName.first + ' ' + this.props.lastName.last}!</h1>
//   }
// })

export default Title
