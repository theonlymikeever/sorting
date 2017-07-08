describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( split([]) ).toEqual( [] );
  });
  it('handles an even array', function(){
    expect( split([2, 5, 6, 3, 11, 8]) ).toEqual([[2,5,6],[3,11,8]]);
  });
  it('handles an odd array', function(){
    expect( split([1, 2, 3, 4, 5]) ).toEqual([[1,2],[3,4,5]]);
  });
  it('merges two arrays', function(){
    expect( merge(  [4,5] , [1,2,3]   )).toEqual([1, 2, 3, 4, 5]);
  });
  it('merge sort', function(){
    expect( mergeSort([2, 5, 6, 3, 11, 8])).toEqual([2, 3, 5, 6, 8, 11]);
  });

//   beforeEach(function(){
//     spyOn(mergeSort, 'swap').and.callThrough();
//   });

//   it('handles an empty array', function(){
//     expect( mergeSort([]) ).toEqual( [] );
//   });
//   it('handles an array with a single number', function(){
//     expect( mergeSort([1]) ).toEqual( [1] );
//   });
//   it('handles an array with multiple numbers', function(){
//     expect( mergeSort([2, 5, 6, 3, 11, 8]) ).toEqual( [2, 3, 5, 6, 8, 11] );
//   });
//   it('handles an array that is already sorted', function(){
//     expect( mergeSort([1, 2, 3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
//   });
//   it('swap to have only been called a max of xx times', function(){
//     mergeSort([3, 7, 1, 4, 9]);
//     // expect(mergeSort.swap.calls.count()).toBeLessThan(26);
//   });

});
