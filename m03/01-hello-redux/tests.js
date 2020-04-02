// INCREMENT
console.assert(
  counter(0, { type: "INCREMENT" }) === 1,
  "If state = 0 should return 1"
);
console.assert(
  counter(1, { type: "INCREMENT" }) === 2,
  "If state = 1 Should return 2"
);

// DECREMENT
console.assert(
  counter(2, { type: "DECREMENT" }) === 1,
  "If state = 2 should return 1"
);

console.assert(
  counter(5, { type: "DECREMENT" }) === 4,
  "If state = 5 should return 4"
);

// ANOTHER TESTS
console.assert(
  counter(3, { type: "SOMETHING" }) === 3,
  "If don't define type, should return the current action"
);

console.assert(
  counter(undefined, {}) === 0,
  "If don't define state and type, should return the default action"
);
