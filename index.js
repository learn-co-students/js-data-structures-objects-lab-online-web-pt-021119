// Write your solution in this file!
const driver = {}

function  updateDriverWithKeyAndValue(driver, key, value) {
   const newDriver= Object.assign({}, driver)
   newDriver[key] = value

  return newDriver 
};
function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value) { 
  driver[key]=value 
  
  return driver 
  
}; 

function deleteFromDriverByKey(driver, key) {
 const deleteDriver= Object.assign({}, driver)
 delete deleteDriver[key]
 return deleteDriver
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];

  return obj;
};