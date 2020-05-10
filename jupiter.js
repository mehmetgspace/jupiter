function isNullOrEmpty(value) {
  var status = false;
  if (value === null || value === '') {
    status = true;
  }
  return status;
}

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
