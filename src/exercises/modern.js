/**
 * Modern JavaScript (ES6+) exercises: destructuring, spread, and the built-in
 * methods/data structures you would reach for instead of hand-rolling loops.
 */

export function swap(pair) {
  /** TODO: using array destructuring, return a new array with the two elements
   *  of `pair` swapped.
   *  e.g. swap([1, 2]) -> [2, 1]
   */
}

export function mergeConfig(defaults, overrides) {
  /** TODO: using the object spread operator, return a new object that combines
   *  `defaults` and `overrides`, where keys in `overrides` win. Do not mutate
   *  either argument.
   *  e.g. mergeConfig({ a: 1, b: 2 }, { b: 3 }) -> { a: 1, b: 3 }
   */
}

export function tally(items) {
  /** TODO: using Array.prototype.reduce, return a plain object mapping each item
   *  to how many times it appears in `items`.
   *  e.g. tally(['a', 'b', 'a']) -> { a: 2, b: 1 }
   */
}

export function unique(array) {
  /** TODO: using a Set, return a new array with duplicate values removed,
   *  preserving first-seen order.
   *  e.g. unique([1, 1, 2, 3, 3]) -> [1, 2, 3]
   */
}

export function frequency(array) {
  /** TODO: return a Map from each value to the number of times it appears.
   *  e.g. frequency(['x', 'y', 'x']) -> Map { 'x' => 2, 'y' => 1 }
   */
}

export function invert(obj) {
  /** TODO: using Object.entries, return a new object with keys and values
   *  swapped.
   *  e.g. invert({ a: '1', b: '2' }) -> { '1': 'a', '2': 'b' }
   */
}
