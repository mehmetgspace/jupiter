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