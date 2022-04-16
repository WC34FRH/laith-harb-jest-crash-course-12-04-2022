let animals = ["elephant", "zebra", "bear", "tiger"];

// Will run once BEFORE all tests run.
// beforeAll(() => {
//   console.log("BEFORE ALL");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

// Will run once BEFORE each test runs.
// beforeEach(() => {
//   console.log("BEFORE EACH");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

// Will run once AFTER each test runs.
// afterEach(() => {
//   console.log("AFTER EACH");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

// Will run once AFTER all tests run.
// afterAll(() => {
//   console.log("AFTER ALL");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

describe("animals array", () => {
  beforeEach(() => {
    console.log("BEFORE EACH");
    animals = ["elephant", "zebra", "bear", "tiger"];
  });

  it("should add animal to end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it.only("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
