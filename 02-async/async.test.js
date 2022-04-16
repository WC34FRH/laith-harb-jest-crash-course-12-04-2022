const fetchData = require("./async");

it("should return correct todo", () => {
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});

// This test doesn't seem to pass for some reason...
it("should return correct todo", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});
