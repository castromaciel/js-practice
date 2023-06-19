/**
 * Calculate a factorial of a number
 * (n * (n-1)) or n!
 * @param {number} number 
 * @returns number 
 */
const factorial = (number) => {
  if (number === 0 ) return 1
  if (number < 1) return -1
  return number * factorial(number - 1)
}

QUnit.test("Test factorial function", (assert) => {
  assert.equal(factorial(1), 1, "Test passed")
  assert.equal(factorial(5), 120, "Test passed")
  assert.equal(factorial(6), 720, "Test passed")
  assert.equal(factorial(7), 5040, "Test passed")
  assert.equal(factorial(8), 40320, "Test passed")
  assert.equal(factorial(0), 1, "Test passed")
})
