class TwitterError {
  constructor (message) {
    this.message = message
  }

  error () {
    return new Error(this.message)
  }

  message () {
    return this.message
  }
}

module.exports = TwitterError
