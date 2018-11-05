describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([4, 3, 1, 2])).toEqual([[4, 3], [1, 2]]);
    expect(split([6, 9, 15, 3, 23])).toEqual([[6, 9, 15], [3, 23]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
    expect(merge([6, 9, 15], [3, 23])).toEqual([3, 6, 9, 15, 23]);
  });
});

describe("Merge sort function", function() {
  it("is able to sort unordered array", function() {
    expect(mergeSort([8, 13, 4, 34, 5, 19])).toEqual([4, 5, 8, 13, 19, 34]);
  });
});
