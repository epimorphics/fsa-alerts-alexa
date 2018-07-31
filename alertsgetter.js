var request = require('superagent')
var moment = require('moment')

function alertToText(alertObj) {
  riskStatements = alertObj.problem.map((problem) => problem.riskStatement).join(", ")
  return `${alertObj.title}, ${riskStatements}`
}

module.exports = function getRecentAlerts(alergen) {
  var onemonthago = moment().subtract(1, 'month')
  return request.get(`https://data.food.gov.uk/food-alerts/id?since=${onemonthago.toISOString()}&problem.allergen=${alergen}&_limit=1`)
    .then((resp) => {
      return resp.body.items.map((item) => alertToText(item)).join(", ")
    })
}
