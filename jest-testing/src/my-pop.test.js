import myPop from "./my-pop";

test("Pop return the pop element", () => {
  expect(myPop([1, 2, 3])).toBe(3);
});

test("Original array [6] will be empty after the pop", () => {
  const foo = [6];
  myPop(foo);
  expect(foo).toEqual([]);
});

test("Array lost the last element", () => {
  const foo = [1, 2, 3];
  myPop(foo);
  expect(foo).toEqual([1, 2]);
});

test("Return undefined when the array is empty", () => {
  expect(myPop([])).toBe(undefined);
});
