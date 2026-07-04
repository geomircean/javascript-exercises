/**
 * Error-handling exercises: try/catch, throw, and custom error classes.
 */

export function safeJsonParse(str) {
  /** TODO: parse `str` as JSON and return the result. If it is not valid JSON,
   *  catch the error and return null instead of throwing.
   *  e.g. safeJsonParse('{"a":1}') -> { a: 1 }; safeJsonParse('nope') -> null
   */
}

export function divide(a, b) {
  /** TODO: return a / b, but throw an Error with the message
   *  'Cannot divide by zero' when b is 0.
   *  e.g. divide(10, 2) -> 5; divide(1, 0) -> throws
   */
}

export class ValidationError extends Error {
  /** TODO: set `this.name` to 'ValidationError' and store the offending `field`
   *  on the instance (this.field = field).
   */
  constructor(message, field) {
    super(message);
  }
}

export function validateAge(age) {
  /** TODO: return `age` if it is 0 or greater. Otherwise throw a
   *  ValidationError whose `field` is 'age'.
   *  e.g. validateAge(30) -> 30; validateAge(-5) -> throws ValidationError
   */
}

export function withFallback(fn, fallback) {
  /** TODO: call `fn()` and return its result. If `fn` throws, swallow the error
   *  and return `fallback` instead.
   *  e.g. withFallback(() => 42, 0) -> 42
   *       withFallback(() => { throw new Error('boom'); }, 'default') -> 'default'
   */
}
