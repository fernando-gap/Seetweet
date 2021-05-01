module.exports = function (string) {
  let encoded = ''
  for (let char = 0; char < string.length; char++) {
    if (/[^a-zA-Z0-9_~.,\-]/.test(string[char])) {
      encoded += `%${string[char].charCodeAt().toString(16)}`
    } else {
      encoded += string[char]
    }
  }
  return encoded
}
