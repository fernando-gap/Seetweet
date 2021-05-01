const url = require('./urls/url')

module.exports = function (data) {
  
  for (const each in data) {
    if (data[each] === '')
      delete data[each]
  }

  return url(data)
}
