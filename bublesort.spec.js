describe('Bubble Sort', function(){
  before(function(){
    spyOn(swap).and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with a single number', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an array with multiple numbers', function(){
    expect( bubbleSort([2, 5, 6, 3, 11, 8]) ).toEqual( [2, 3, 5, 6, 8, 11] );
  });
  it('handles an array that is already sorted', function(){
    expect( bubbleSort([1, 2, 3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });
  it('swap to have only been called a max of xx times', function(){
    bubbleSort([3, 7, 1, 4, 9]);
    expect(swap.calls.count()).toBeLessThan(26);
  });

});
