var express = require('express')
var router = express.Router()
var _ = require('lodash')

function render (res, pageData) {
  res.render('dashboard', {
    apiKeyId: pageData.apiKey.id,
    apiKeySecret: pageData.apiKey.secret
  })
}

router.get('/dashboard', function (req, res) {
  res.locals.user.getApiKeys(function (err, collectionResult) {
    var pageData = {}
    if (_.isEmpty(collectionResult.items)) {
      res.locals.user.createApiKey(function (err, apiKey) {
        pageData.apiKey = apiKey
        render(res, pageData)
      })
    } else {
      pageData.apiKey = _.first(collectionResult.items)
      render(res, pageData)
    }
  })
})

module.exports = router
