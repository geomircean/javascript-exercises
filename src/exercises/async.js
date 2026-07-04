/**
 * Asynchronous JavaScript exercises: Promises and async/await.
 * Every function here must return a Promise (either explicitly, or implicitly
 * by being declared `async`).
 */

export function delay(ms, value) {
  /** TODO: return a Promise that resolves with `value` after `ms` milliseconds.
   *  e.g. await delay(10, 'x') -> 'x'
   *  Hint: wrap setTimeout in `new Promise(...)`.
   */
}

export function resolveAll(promises) {
  /** TODO: given an array of promises (or plain values), return a single Promise
   *  that resolves to an array of all their resolved values, preserving order.
   *  e.g. await resolveAll([Promise.resolve(1), delay(5, 2), 3]) -> [1, 2, 3]
   *  Hint: Promise.all.
   */
}

export function firstToResolve(promises) {
  /** TODO: given an array of promises, return a Promise that resolves with the
   *  value of whichever settles first.
   *  e.g. await firstToResolve([delay(30, 'slow'), delay(5, 'fast')]) -> 'fast'
   *  Hint: Promise.race.
   */
}

export function retry(asyncFn, attempts) {
  /** TODO: call `asyncFn` (a function that returns a Promise). If it rejects,
   *  call it again, up to `attempts` total tries. Resolve with the first success;
   *  reject with the last error if every attempt fails.
   *  e.g. retry(fnThatFailsOnceThenSucceeds, 2) -> resolves
   *       retry(fnThatAlwaysFails, 3) -> rejects
   */
}

export async function sumAsync(a, b) {
  /** TODO: using async/await, return the sum of a and b.
   *  Because it is declared `async`, the return value is automatically a Promise.
   *  e.g. await sumAsync(12, 13) -> 25
   */
}
