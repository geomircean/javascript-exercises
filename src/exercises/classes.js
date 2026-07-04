/**
 * Object-oriented JavaScript exercises: classes, getters, static methods,
 * inheritance, and `this`.
 */

export class Rectangle {
  /** TODO:
   *  - store `width` and `height` on the instance
   *  - area(): return width * height
   *  - perimeter(): return 2 * (width + height)
   *  - get isSquare: true when width === height
   *  - static fromSquare(size): return a new Rectangle with equal sides
   *  e.g. new Rectangle(3, 4).area() -> 12; .perimeter() -> 14; .isSquare -> false
   *       Rectangle.fromSquare(5).area() -> 25
   */
  constructor(width, height) {}

  area() {}

  perimeter() {}

  get isSquare() {}

  static fromSquare(size) {}
}

export class Animal {
  /** TODO:
   *  - store `name` on the instance
   *  - speak(): return `${name} makes a sound`
   */
  constructor(name) {}

  speak() {}
}

export class Dog extends Animal {
  /** TODO: override speak() to return `${name} barks`
   *  (reuse the inherited constructor; do not redefine it)
   *  e.g. new Dog('Rex').speak() -> 'Rex barks'; new Dog('Rex') instanceof Animal -> true
   */
  speak() {}
}

export class Counter {
  /** TODO:
   *  - start the count at 0
   *  - increment(): add 1 to the count and return `this` (so calls can be chained)
   *  - get value: return the current count
   *  e.g. const c = new Counter(); c.increment(); c.increment(); c.value -> 2
   */
  constructor() {}

  increment() {}

  get value() {}
}
