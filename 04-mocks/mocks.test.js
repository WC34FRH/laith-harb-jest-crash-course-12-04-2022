const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

// const mock = (x) => 42 + x;

it("mock callback", () => {
  const mockCalledback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCalledback);

  expect(mockCalledback.mock.calls.length).toBe(2);
  // [ call1, call2 ]

  expect(mockCalledback.mock.calls[0][0]).toBe(0);

  expect(mockCalledback.mock.calls[1][0]).toBe(1);
});
