// import { describe } from 'jest';
import { strings, objects, arrays, functions } from './exercises/index';
import mockData from './data.mock';

// Input-guarding convention: every array- or string-consuming exercise treats
// null, undefined, and empty input as "no data" and returns its identity result
// (0, '', [], or a zeroed object) instead of throwing.

describe('strings', () => {
  test('concatenation', () => {
    expect(strings.concatenation('', 'abc')).toBe('abc');
    expect(strings.concatenation(null, 'abc')).toBe('abc');
    expect(strings.concatenation(undefined, 'abc')).toBe('abc');
    expect(strings.concatenation('abc', null)).toBe('abc');
    expect(strings.concatenation('abc', undefined)).toBe('abc');
    expect(strings.concatenation('abc', 'def')).toBe('abcdef');
  });
  test('reverseString', () => {
    expect(strings.reverseString('abc')).toBe('cba');
    expect(strings.reverseString(null)).toBe('');
    expect(strings.reverseString(undefined)).toBe('');
    expect(strings.reverseString('')).toBe('');
    expect(strings.reverseString(123456)).toBe('654321');
    expect(strings.reverseString('a')).toBe('a');
    expect(strings.reverseString('1')).toBe('1');
  });
  test('countCharacters', () => {
    expect(strings.countCharacters('test123.')).toEqual({ alphabets: 4, digits: 3, special: 1 });
    expect(strings.countCharacters('123.')).toEqual({ alphabets: 0, digits: 3, special: 1 });
    expect(strings.countCharacters('123')).toEqual({ alphabets: 0, digits: 3, special: 0 });
    expect(strings.countCharacters(";'.")).toEqual({ alphabets: 0, digits: 0, special: 3 });
    expect(strings.countCharacters('test')).toEqual({ alphabets: 4, digits: 0, special: 0 });
    expect(strings.countCharacters(1235)).toEqual({ alphabets: 0, digits: 4, special: 0 });
    expect(strings.countCharacters('')).toEqual({ alphabets: 0, digits: 0, special: 0 });
    expect(strings.countCharacters(null)).toEqual({ alphabets: 0, digits: 0, special: 0 });
    expect(strings.countCharacters(undefined)).toEqual({ alphabets: 0, digits: 0, special: 0 });
  });
  test('vowelsAndConsonants', () => {
    expect(strings.vowelsAndConsonants('aaa')).toEqual({ vowels: 3, consonants: 0 });
    expect(strings.vowelsAndConsonants('acaca')).toEqual({ vowels: 3, consonants: 2 });
    expect(strings.vowelsAndConsonants('babab')).toEqual({ vowels: 2, consonants: 3 });
    expect(strings.vowelsAndConsonants('aaa1230')).toEqual({ vowels: 3, consonants: 0 });
    expect(strings.vowelsAndConsonants('a1a1a')).toEqual({ vowels: 3, consonants: 0 });
    expect(strings.vowelsAndConsonants('bbb')).toEqual({ vowels: 0, consonants: 3 });
    expect(strings.vowelsAndConsonants('b3b3b')).toEqual({ vowels: 0, consonants: 3 });
    expect(strings.vowelsAndConsonants('')).toEqual({ vowels: 0, consonants: 0 });
    expect(strings.vowelsAndConsonants(null)).toEqual({ vowels: 0, consonants: 0 });
    expect(strings.vowelsAndConsonants(undefined)).toEqual({ vowels: 0, consonants: 0 });
  });
  test('replaceChar', () => {
    expect(strings.replaceChar('vvv', 'v', 'b')).toBe('bbb');
    expect(strings.replaceChar('dada', 'd', 'b')).toBe('baba');
    expect(strings.replaceChar('violet', 'b', 't')).toBe('violet');
    expect(strings.replaceChar('veto', 'e', '')).toBe('vto');
    expect(strings.replaceChar('varia', 'ri', 'p')).toBe('vapa');
    expect(strings.replaceChar('', 'a', 'b')).toBe('');
    expect(strings.replaceChar(null, 'a', 'b')).toBe('');
    expect(strings.replaceChar(undefined, 'a', 'b')).toBe('');
  });
});

describe('objects', () => {
  test('displayName', () => {
    const { objectKeys, greeting } = objects.displayName();
    expect(typeof objectKeys).toBe('object');
    expect(objectKeys.length).toBe(2);
    expect(typeof greeting).toBe('string');
    expect(greeting).toContain('Mary');
    expect(greeting).toContain('Lou');
  });
  test('readingKeys', () => {
    const { dotValues, bracketValues, onlyBracketKeys } = objects.readingKeys();
    expect(typeof dotValues).toBe('object');
    expect(typeof bracketValues).toBe('object');
    expect(typeof onlyBracketKeys).toBe('object');
    expect(dotValues.length).toBe(4);
    expect(bracketValues.length).toBe(4);
    expect(onlyBracketKeys.length).toBe(1);
  });
  test('allowedTypes', () => {
    const result = objects.allowedTypes();
    expect(Object.keys(result).length).toBe(6);
  });
});

describe('arrays', () => {
  test('iterate', () => {
    const { initialArray, forEachArray, mapArray } = arrays.iterate();
    expect(initialArray).toHaveLength(7);
    expect(forEachArray).toHaveLength(7);
    expect(mapArray).toHaveLength(7);
    expect(mapArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          index: expect.any(Number),
          value: expect.anything()
        })
      ])
    );
  });

  test('sum', () => {
    expect(arrays.sum([])).toBe(0);
    expect(arrays.sum(null)).toBe(0);
    expect(arrays.sum(undefined)).toBe(0);
    expect(arrays.sum([1])).toBe(1);
    expect(arrays.sum([3, 5, 9])).toBe(17);
    expect(arrays.sum(['3', '5', '9'])).toBe(17);
    expect(arrays.sum([true, false, 12])).toBe(13);
  });

  test('duplicates', () => {
    expect(arrays.duplicates([])).toBe(0);
    expect(arrays.duplicates([1, 2, 4])).toBe(0);
    expect(arrays.duplicates([1, 3, 4, 3, 3])).toBe(3);
    expect(arrays.duplicates(['a', 'ge', 'h', 'x', 'ge'])).toBe(2);
    expect(arrays.duplicates(null)).toBe(0);
    expect(arrays.duplicates(undefined)).toBe(0);
  });

  test('merge', () => {
    expect(arrays.merge([], [])).toEqual([]);
    expect(arrays.merge(null, null)).toEqual([]);
    expect(arrays.merge([1], null)).toEqual([1]);
    expect(arrays.merge(null, [1])).toEqual([1]);
    expect(arrays.merge([1], [])).toEqual([1]);
    expect(arrays.merge([], [1])).toEqual([1]);
    expect(arrays.merge([{ value: 25 }], [{ value: 17 }])).toEqual([{ value: 25 }, { value: 17 }]);
    expect(arrays.merge([4, 5, 8, 10], [13, 9, 7])).toEqual([4, 5, 8, 10, 13, 9, 7]);
    expect(arrays.merge([null], [[]])).toEqual([null, []]);
  });

  test('sort', () => {
    expect(arrays.sort([])).toEqual([]);
    expect(arrays.sort(null)).toEqual([]);
    expect(arrays.sort(undefined)).toEqual([]);
    // default order is ascending
    expect(arrays.sort(['h', 'f', 'g'])).toEqual(['f', 'g', 'h']);
    expect(arrays.sort([4, 3, 1, 5, 2, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arrays.sort([5])).toEqual([5]);
    // explicit ascending
    expect(arrays.sort(['h', 'f', 'g'], 'asc')).toEqual(['f', 'g', 'h']);
    expect(arrays.sort([4, 3, 1, 5, 2, 6], 'asc')).toEqual([1, 2, 3, 4, 5, 6]);
    // descending
    expect(arrays.sort(['h', 'f', 'g'], 'desc')).toEqual(['h', 'g', 'f']);
    expect(arrays.sort([4, 3, 1, 5, 2, 6], 'desc')).toEqual([6, 5, 4, 3, 2, 1]);
    expect(arrays.sort([5], 'desc')).toEqual([5]);
  });

  test('rotate', () => {
    expect(arrays.rotate([], 6)).toEqual([]);
    expect(arrays.rotate(null, 3)).toEqual([]);
    expect(arrays.rotate(undefined, 3)).toEqual([]);
    // rotate to the right: the last `positions` elements wrap to the front
    expect(arrays.rotate([1, 2, 3], 2)).toEqual([2, 3, 1]);
    expect(arrays.rotate([1, 2, 3, 4, 5, 6], 3)).toEqual([4, 5, 6, 1, 2, 3]);
    expect(arrays.rotate([1], 2)).toEqual([1]);
  });
  test('calculateVotes', () => {
    const { calculateVotes } = mockData;
    expect(arrays.calculateVotes([])).toBe(0);
    expect(arrays.calculateVotes(undefined)).toBe(0);
    expect(arrays.calculateVotes(null)).toBe(0);
    expect(arrays.calculateVotes(calculateVotes.voters1)).toBe(7);
  });
  test('shoppingSpree', () => {
    const { shoppingSpree } = mockData;
    expect(arrays.shoppingSpree([])).toBe(0);
    expect(arrays.shoppingSpree(null)).toBe(0);
    expect(arrays.shoppingSpree(undefined)).toBe(0);
    expect(arrays.shoppingSpree(shoppingSpree.wishlist)).toBe(227005);
  });
  test('nthSmallest', () => {
    // n is 1-based: n === 1 returns the smallest element
    expect(arrays.nthSmallest([3, 1, 2], 1)).toBe(1);
    expect(arrays.nthSmallest([3, 1, 2], 2)).toBe(2);
    expect(arrays.nthSmallest([3, 1, 2], 3)).toBe(3);
    expect(arrays.nthSmallest([-5, 0, 5, 10], 1)).toBe(-5);
    expect(arrays.nthSmallest([-5, 0, 5, 10], 2)).toBe(0);
    expect(arrays.nthSmallest([7, -3, 0, 4, -1], 3)).toBe(0);
    expect(arrays.nthSmallest([100, -100, 0], 2)).toBe(0);
  });
});

describe('functions', () => {
  test('palindrome', () => {
    expect(functions.palindrome('aba')).toBe(true);
    expect(functions.palindrome('abba')).toBe(true);
    expect(functions.palindrome('abbc')).toBe(false);
    expect(functions.palindrome(1221)).toBe(true);
    expect(functions.palindrome(121)).toBe(true);
    expect(functions.palindrome(122)).toBe(false);
  });

  test('argumentsOfAFunction', () => {
    expect(functions.argumentsOfAFunction()).toBe(0);
    expect(functions.argumentsOfAFunction({ value: '5' })).toBe(1);
    expect(functions.argumentsOfAFunction(1, 'abc', 'frd')).toBe(3);
  });

  test('leapYear', () => {
    expect(functions.leapYear(2001)).toBe(false);
    expect(functions.leapYear(2004)).toBe(true);
    expect(functions.leapYear(2016)).toBe(true);
    expect(functions.leapYear(2000)).toBe(true);
    expect(functions.leapYear(1900)).toBe(false);
  });

  test('fibonacci', () => {
    expect(functions.fibonacci(0)).toEqual([]);
    expect(functions.fibonacci(1)).toEqual([0]);
    expect(functions.fibonacci(2)).toEqual([0, 1]);
    expect(functions.fibonacci(3)).toEqual([0, 1, 1]);
    expect(functions.fibonacci(4)).toEqual([0, 1, 1, 2]);
    expect(functions.fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test('callMeBack', () => {
    const callback = jest.fn();
    functions.callMeBack(12, 13, callback);
    expect(callback).toHaveBeenCalledWith(25);
  });
});
