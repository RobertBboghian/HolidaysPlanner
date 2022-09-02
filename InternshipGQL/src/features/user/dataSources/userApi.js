const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async userData() {
    const userData = { id: 1, isAdmin: true }
    return userData
  }

  async authenticateUser(userName, password) {
    if (userName !== 'Administrator' || password !== 'a') return false
    else return true
  }
}

module.exports = UserApi
