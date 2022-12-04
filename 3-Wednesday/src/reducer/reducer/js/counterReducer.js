const counterReducer = (count, action) => {
  switch (action.type) {
    case 'INCREASE':
      return count + 1;
    case 'DECREASE':
      return count - 1;
    default:
      return count;
  }
};

// expect(counterReducer(0, { type: 'INCREASE' })).to.equal(1);
let initialState = 0;
let action = { type: 'INCREASE' };
let result = counterReducer(initialState, action);
console.log(result);

// expect(counterReducer(0, { type: 'DECREASE' })).to.equal(-1);
initialState = 0;
action = { type: 'DECREASE' };
result = counterReducer(initialState, action);
console.log(result);

// expect(counterReducer(0, { type: 'UNMATCHING_ACTION' })).to.equal(0);
initialState = 0;
action = { type: 'UNMATCHING_ACTION' };
result = counterReducer(initialState, action);
console.log(result);
