class TwitterError {
  constructor (message, status, reason) {
    this.message = message
    this.status = status
    this.reason = reason || null
  }

  error () {
    return new Error(`${this.message} ${this.reason}`)
  }
}

module.exports = TwitterError
