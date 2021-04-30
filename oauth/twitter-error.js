class TwitterError {
  constructor (message) {
    this.message = message
    this.status = 500
  }

  error () {
    return new Error(this.message)
  }

  message () {
    return this.message
  }
}

module.exports = TwitterError
