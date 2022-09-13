/**
 * Check if value is empty
 * @param value
 * @returns {boolean}
 */
function isNullOrEmpty(value) {
  var status = false;
  if (value === null || value === '') {
    status = true;
  }
  return status;
}

/**
 * Find specific item in an array
 * @param value
 * @param list
 * @returns {null}
 */
function findItemInArray(value, list) {
  var index = list.map(function(item) {
    return item;
  }).indexOf(value);

  var result = null;
  if (index !== -1) {
    result = list[index];
  }

  return result;
}

/**
 * Find specific item in an array for object
 * @param value
 * @param key
 * @param list
 * @returns {null}
 */
function findItemInArrayByKey(value, key, list) {
  var index = list.map(function(item) {
    return item[key];
  }).indexOf(value);

  var result = null;
  if (index !== -1) {
    result = list[index];
  }

  return result;
}

/**
 * Check if objects are equal
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
function areObjectsEqual(obj1, obj2) {
  var result = null;

  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

/**
 * Remove specific item an array
 * @param userItem
 * @param list
 * @returns {*[]}
 */
function removeItemFromArray(userItem, list) {
  let result = [];
  if (typeof list !== 'undefined') {
    if (Array.isArray(list)) {
      result = list;
      if (result.length > 0) {
        result = list.filter(listItem => listItem !== userItem);
      }
    }
  }
  return result;
}

/**
 * Remove specific item in an array for object
 * @param value
 * @param key
 * @param list
 * @returns {*[]}
 */
function removeItemFromArrayByKey(value, key, list) {
  let result = [];
  if (typeof list !== 'undefined') {
    if (Array.isArray(list)) {
      result = list;
      if (result.length > 0) {
        const findIndexValue = list.findIndex(listItem => listItem.id === value);
        if (findIndexValue > -1) {
          result.splice(findIndexValue, 1);
        }
      }
    }
  }
  return result;
}

/**
 * Calculate total price for products with quantity
 * @param products
 * @returns {*|number}
 */
function calculateTotalPriceWithQuantity(products) {
  // create a variable for result value
  let totalPrice = 0;

  // Check undefined
  if (typeof products !== 'undefined') {

    // Check is array
    if (Array.isArray(products)) {

      // create an initial value for reduce
      const initialValue = 0;

      // calculate the price
      totalPrice = products
        .map(product => product['price'] * product['quantity'])
        .reduce((prev, current) => prev + current, initialValue);

    }

  }

  // return the result value
  return totalPrice;
}
