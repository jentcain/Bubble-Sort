describe('Bubble Sort', function(){
  beforeAll(function(){
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles an array with multiple elements', function(){
    expect( bubbleSort([7, 20, 5, 8]) ).toEqual( [5, 7, 8, 20] );
    expect(window.swap.calls.count()).toEqual(3);
  });

  it('calls swap the correct number of times', function(){
  expect( bubbleSort([5, 7, 8, 20, 1, 50, 3]) ).toEqual( [1, 3, 5, 7, 8, 20, 50] );
  expect(window.swap.calls.count()).toEqual(12);
  });
});


