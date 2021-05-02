class TwitterError {
  constructor (message, status, reason) {
    this.message = message
    this.status = status
    this.reason = reason
  }

  error () {
    return new Error(`${this.status} ${this.message}. Reason: ${reason}`)
  }
}

module.exports = TwitterError
