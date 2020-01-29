'use strict'

const filter = (arr, func) => {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    // vai passar por parâmetro o valor, e vai verificar se é true, se sim, retorna filtrado
    if (func(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

export default filter