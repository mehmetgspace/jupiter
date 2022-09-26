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

/**
 * Find specific item in an array
 * @param value
 * @param list
 */
function findItemInArray(value: string, list: any[]): any {
  // find index value in the array
  const index = list.map(item => {
    return item;
  }).indexOf(value);

  // set result if index is valid
  let result = null;
  if (index !== -1) result = list[index];

  // return the result value
  return result;
}
