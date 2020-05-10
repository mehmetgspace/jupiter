function isNullOrEmpty(value) {
  var status = false;
  if (value === null || value === '') {
    status = true;
  }
  return status;
}
