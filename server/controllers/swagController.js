const swag = require('../models/swag')

module.exports = {
  read: (req, res) => {
    res.status(200).send(swag)
  }
}