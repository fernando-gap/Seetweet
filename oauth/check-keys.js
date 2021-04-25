module.exports = function () {
  const tokens = [
    'CONSUMER_KEY',
    'CONSUMER_SECRET',
    'ACCESS_KEY',
    'ACCESS_TOKEN_SECRET'
  ]

  const invalidTokens = []

  for (let each of tokens) {
    if (typeof process.env[each] === 'undefined') {
      invalidTokens.push(each)
    }
  }

  if (invalidTokens.length !== 0) {
    throw invalidTokens;
  }
  return;
}
