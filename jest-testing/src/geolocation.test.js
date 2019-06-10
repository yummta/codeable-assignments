import geolocation from "./geolocation";

jest.mock("get-geolocation");

test("valid return", async () => {
  const value = await geolocation();
  expect(value).toEqual("dataaa");
});
