// Write your solution in this file!
var customerName = 'bob'

// helpers.js

// Declare customerName to be "bob" in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  // Modify the customerName variable to uppercase
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // Set the bestCustomer variable to "not bob"
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  // Overwrite the bestCustomer variable with the new value
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // Attempt to reassign the least favorite customer
  // This should throw an error since leastFavoriteCustomer is a constant variable
  leastFavoriteCustomer = 'new least favorite'; // This will throw an error
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
