import { greetMe } from '../src/util.js';

describe('Simple test case', () => {
  it ('greetMe greets when called', () => {
    expect(greetMe()).toEqual('OH HAI');
  });
});
