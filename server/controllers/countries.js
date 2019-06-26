const isoCountries = require('iso-countries').countries
const _ = require('lodash')

const countries = _.map(isoCountries, ({ name }) => name)

exports.all = function (req, res) {
  res.send(countries)
}
