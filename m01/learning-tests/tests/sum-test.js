'use strict'

const sum = require('./sum')

// Testes manuais
// console.log(sum(1, 2) === 3)
// console.log(sum(2, 2) === 4)

// TDD
// console.assert(false, 'Mensagem')

console.assert(
  typeof sum === 'function',
  'Should sum is a function'
)

console.assert(
  sum(1, 2) === 3,
  'Should sum(1, 2) return 3'
)

console.assert(
  sum(2, 3) === 5,
  'Should sum(2, 3) return 5'
)


// Se todos os testes forem true, ele vai parar nessa linha
console.log('All tests passed!')