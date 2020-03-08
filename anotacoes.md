# REACTJS NINJA

REPOSITÓRIO GITHUB: "https://github.com/da2k/curso-reactjs-ninja"
github issues : dúvida -> escreve a dúvida e marca com @fdaciuk

## MÓDULO 01

$ npm i http-server // ou yarn add
$ http-server // iniciar o http-server

**SUB MÓDULO WEBPACK & REACT**
webpack.github.io

// sempre que for instalar as dependências, ver no repositório do curso quais são as versões que foram instaladas nas gravações dos vídeos !
"https://github.com/da2k/curso-reactjs-ninja/blob/2209a8e5c54436d124fbcb87c05ae88ef2ba2dcb/versions-of-dependencies.md"

// após as configurações inicias, é necessário criar o arquivo bundle.js
// após instalar de forma global o webpack:
\$ `webpack // este comando vai gerar o arquivo bundle`

// após instalar webpack-dev-server de forma global
\$ `webpack-dev-server // vai executar o servidor de desenvolvimento do webpack`

---

### LIFECYCLE

#### mounting / unmounting

- `componentWillMount()`: fazer alguma coisa antes de o componente montar
- `componenteDidMount()`: fazer alguma coisa depois de o componente montar
- `componentWillUnmount()`: fazer alguma coisa antes de o componente desmontar

#### updating

- `componenteWillReceiveProps(nextProps)`: quando o component vai receber novas props
- `shouldComponentUpdate(nextProps, nextState)` => bool: o componente deve ou não ser atualizado
- `componentWillUpdate(nextProps, nextState)`: antes de o componente ser atualizado
- `componentDidUpdate(prevProps, prevState)`: depois de o componente ser atualizado

---

### TDD -> Test-driven development

#### MOMENTOS

**RED**: Escreva um teste para uma implementação INEXISTENTE e execute o teste. Ele vai QUEBRAR.
**GREEN**: FAÇA A IMPLEMENTAÇÃO no código e execute o teste. Ele deve PASSAR
**BLUE**: Refactor: Existe código duplicado? Refatore. Nesse passo, nenhum teste anteriror deve quebrar.

## MÓDULO 02

### JS

`var arr = [1, 2, 3]`

- MAP
  `arr.map((item, index, array) => ({item, index, array}))`
  // [ { item: 1, index: 0, array:[1, 2, 3] },
  // { item: 2, index: 1, array:[1, 2, 3] },
  // { item: 3, index: 2, array:[1, 2, 3] } ]

- FILTER
  `arr.filter((item, index, array) => item > 2)`
  // [ 3 ]

- EVERY
  `arr.every(item => item > 2)` // todos os itens > 2?
  // false
  `arr.every(item => item > 0)` // todos os itens > 0?
  // true

- SOME // basicamente o contrário de every
  `arr.some(item => item > 2)` // algum item > 2?
  // true
  `arr.some(item => item > 3)` // algum item > 3?
  // false

- REVERSE
  `arr.reverse()`
  // [3, 2, 1]

- SLICE
  `arr.slice(0, 2)` // ignora todos outros indices do array
  // [1, 2]
  `arr.slice(1)` // pega do indice 1 em diante
  // [2, 3]
  `arr.slice(0, -1)` // só não pega o último índice
  // [1, 2]
  `arr.slice(-1)` // pega último item
  // [3]

- REDUCE
  `arr.reduce((acc, item) => acc + item)` // 1 + 2 + 3 = 6

- REDUCERIGHT
  `["lo", "ri", "Mu"].reduceRight((acc, item) => acc + item, '')`
  // Murilo

- FIND
  `arr.find(item => item === 1)`
  // 1
  `arr.find(item => item === 10)`
  // undefined

## MÓDULO 03

"Redux is a predictable state container for JavaScript apps."

#### 3 principios

1. "Single source of truth" // Uma única fonte de estados, centralizada
2. "State is read-only" // Estado é apenas leitura
3. "Changes are made with pure functions" // Mudanças feitas apenas com funções puras
