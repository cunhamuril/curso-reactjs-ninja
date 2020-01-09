'use strict'

import { expect } from 'chai'// chai é uma ferramenta de asserção
import sum from './sum'

it('sum should be a function', () => {
  expect(sum).to.be.a('function')
});

it('sum(1, 2) should return 3', () => {
  expect(sum(1, 2)).to.be.equal(3)
})



//-----------------------------------------------------------------
// describe('# ESCOPO', () => {
//   // pode utilizar it ou test
//   it('Testando jest', () => {})
//   it('Testando jest 2', () => {});
// });

// describe('# ESCOPO 2', () => {
//   it('Testando jest', () => {})
//   it('Testando jest 2', () => {});
// });

// it('Um é igual a 1', () => {
//   // console.assert(1 === 2, '1 não é igual a 2')
//   expect(1).toBe(1)
// });

