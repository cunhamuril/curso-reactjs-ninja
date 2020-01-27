/**
 * Exemplo de recursão
 */
const sum = arr => {
  if (arr.length === 0) return 0

  // vai pegar sempre a primeira posição do array e
  // utilizando o slice, vai "fatiar" o array tirando o primeiro valor do array
  // ex: [ 1, 2, 3 ].slice(1)
  // returns: [ 2, 3 ]

  return arr[0] + sum(arr.slice(1))
}

console.log(sum([1, 2, 3, 4]))