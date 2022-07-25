// isNullOrEmpty
function isNullOrEmpty(value) {
  var status = false;
  if (value === null || value === '') {
    status = true;
  }
  return status;
}

// findItemInArray
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

// findItemInArrayByKey
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

// areObjectsEqual
function areObjectsEqual(obj1, obj2) {
  var result = null;

  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// removeItemFromArray
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

// removeItemFromArrayByKey
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
