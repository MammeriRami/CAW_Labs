function first(array, n) {
    if (array == null || n <= 0) return [];
    if (n == null) return array[0];
    return array.slice(0, n);
  }


// Test case 1
test('returns an empty array if the input array is null', () => {
  const result = first(null, 3);
  expect(result).toEqual([]);
});

// Test case 2
test('returns an empty array if n is less than or equal to 0', () => {
  const result = first([1, 2, 3], 0);
  expect(result).toEqual([]);
});

// Test case 3
test('returns the first element of the array if n is null', () => {
  const result = first(['apple', 'orange', 'banana'], null);
  expect(result).toEqual('apple');
});

// Test case 4
test('returns the first n elements of the array', () => {
  const result = first([10, 20, 30, 40, 50], 3);
  expect(result).toEqual([10, 20, 30]);
});

// Test case 5
test('returns the entire array if n is greater than the array length', () => {
  const result = first(['a', 'b', 'c'], 5);
  expect(result).toEqual(['a', 'b', 'c']);
});