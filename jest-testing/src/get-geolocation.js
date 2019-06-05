function getGeolocation() {
  return new Promise(fulfill => {
    navigator.geolocation.getCurrentPosition(position => {
      fulfill(position);
    });
  });
}
export default getGeolocation;
