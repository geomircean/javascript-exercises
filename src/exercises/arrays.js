export function iterate() {
  /*TODO:
    1. initialise an Array of length 7
    2. create another array with forEach, based on your initial array, where
     you make all values in the array string
    3. convert the values of the initial array to an array that has contains a list of 
     objects having the keys 'index' and 'value'
  */
  const initialArray = [];
  const forEachArray = [];
  const mapArray = [];

  return { initialArray, forEachArray, mapArray };
}

export function sum(array) {
  /** TODO: calculate a sum of all the elements of the given array */
  return 0;
}

export function duplicates(array) {
  /** TODO: count how many elements are part of a duplicated value.
   *  Count every occurrence of any value that appears more than once.
   *  e.g. [1, 3, 4, 3, 3] -> 3 (three 3s); ['a', 'ge', 'h', 'x', 'ge'] -> 2 (two 'ge's)
   */
  const totalNumberOfDuplicates = 0;
  return totalNumberOfDuplicates;
}

export function merge(array1, array2) {
  /** TODO: merge two given arrays  */
}

export function sort(array, sortOrder) {
  /** TODO:
   *  given an array, sort it by the given flag called sortOrder.
   *  sortOrder can be 'asc' (the default when omitted) or 'desc'.
   *  Sort numbers numerically and strings lexicographically.
   *  e.g. sort([3, 1, 2]) -> [1, 2, 3]; sort([3, 1, 2], 'desc') -> [3, 2, 1]
   */
  const sortedArray = [];
  return sortedArray;
}

export function rotate(array, positions) {
  /** TODO: Rotate the elements of the array to the RIGHT by the number of positions
   *  (the last `positions` elements wrap around to the front).
   *  e.g. rotate([1, 2, 3], 2) -> [2, 3, 1]; rotate([1, 2, 3, 4, 5, 6], 3) -> [4, 5, 6, 1, 2, 3]
   */
  const rotatedArray = [];
  return rotatedArray;
}

export function calculateVotes(voters) {
  /**TODO:
   * Turn an array of voter objects into a count of how many people voted
   * a voter object looks like this: { name:'Bob' , age: 30, voted: true }
   */
}

export function shoppingSpree(wishlist) {
  /** TODO:
   * Given an array of all your wishlist items, figure out how much it would cost
   * to just buy everything at once
   * wishlist item: { title: "4 carat diamond ring", price: 45000 }
   */
}

export function nthSmallest(array, n) {
  /**
   * TODO:
   * Given an array of minimum length 3, return the Nth smallest number.
   * n is 1-based: n === 1 returns the smallest element.
   * The array can contain a mixture of positives, negatives or zeroes.
   * e.g. nthSmallest([7, -3, 0, 4, -1], 3) -> 0
   */
}
