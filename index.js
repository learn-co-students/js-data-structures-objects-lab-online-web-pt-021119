// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  let newDriver = Object.assign({}, obj, {[key]: value});
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

function deleteFromDriverByKey(obj, key) {
  let newDriver = {...obj};

  delete newDriver[key];

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];

  return obj;
}
