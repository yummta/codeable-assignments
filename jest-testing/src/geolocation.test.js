import geolocation from "./geolocation";

jest.mock("get-geolocation");

test("valid return", () => {
  expect(geolocation()).toEqual(expect.any(Promise));
});
