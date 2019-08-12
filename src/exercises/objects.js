export function displayName() {
  const obj = {
    firstName: 'Marry',
    lastName: 'Lou'
  };
  /**TODO:
   * return the keys of the object
   * return the greeting with the person's first name and last name
   * add an age key to the declared object with the value 24
   **/

  return {
    objectKeys: [],
    greeting: ''
  };
}

export function readingKeys() {
  const obj = {
    key: '0123',
    aKey: 'ABC',
    b_key: 'DEF',
    'C key': 'GHI'
  };
  /** TODO:
   * 1 Read values from obj using dot notation
   * 2 Read values from obj using brakets
   * 3 List all keys that can be read only using brackts
   */

  return {
    dotValues: [],
    braketValues: [],
    onlyBraketKeys: []
  };
}

export function allowedTypes() {
  /**
   * TODO:
   * Return an object that has values on keys of the following type
   * - number
   * - boolean
   * - string
   * - object (with at least another key)
   * - array (with at least an element)
   * - function
   */
  return {};
}
