/**
 * Check if value is empty
 * @param value
 */
function isNullOrEmpty(value: any): boolean {
  // create a variable for result value
  let status = false;

  // check value with ternary conditional operator
  status = value === null || value === '';

  // return the result value
  return status;
}
