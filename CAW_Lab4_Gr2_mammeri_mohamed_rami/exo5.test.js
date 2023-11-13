function chunk(array, size) {
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
 


  test('chunks an array into subarrays of the specified size', () => {
    // Test case 1
    const result1 = chunk([1, 2, 3, 4, 5], 2);
    expect(result1).toEqual([[1, 2], [3, 4], [5]]);
  });
  
  test('returns an empty array if the input array is null', () => {
    const result = chunk(null, 2);
    expect(result).toEqual([]);
  });
