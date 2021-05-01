const encode = require('./encode')
const api = require('./endpoints')

module.exports = function (data) {
  let params = ''
  for (const key in data) {
    params += `${key}=${encode(data[key])}&`  
  }
  return `${api[data.type]}${params.replace(/\&$/, '')}`
}
