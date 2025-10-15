function sum(a, b) {
  return a + b;
}

function add(a, b) {
  return a + b;
}

function doAsyncBadly() {
  return new Promise((resolve) => setTimeout(() => resolve("done"), 10));
}
doAsyncBadly();

module.exports = { sum, add };