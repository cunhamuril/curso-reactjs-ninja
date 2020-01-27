'use strict'

const map = (arr = [], func = item => item) => {
  return (function mapInternal(arrayInternal, counter) {
    if (arrayInternal.length === 0) return []

    const [head, ...tail] = arrayInternal
    return [
      func(head, counter, arr),
      ...mapInternal(tail, counter + 1)
    ]
  })(arr, 0)
}

export default map