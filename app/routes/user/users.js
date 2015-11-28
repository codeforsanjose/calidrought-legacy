var express = require('express'),
    router = express.Router();

router.get('/dashboard', function(req, res) {
  res.locals.user.getApiKeys(function(err, collectionResult) {
    if(collectionResult.items.length === 0) {
      res.locals.user.createApiKey(function(err, apiKey) {
        res.locals.apiKeyId = apiKey.id;
        res.locals.apiKeySecret = apiKey.secret;
        res.locals.username = res.locals.user.username;
        apiKeyId = apiKey.id;
        apiKeySecret = apiKey.secret;
        res.render("dashboard");
        return;
      })
    } else {
      collectionResult.each(function(apiKey) {
        res.locals.apiKeyId = apiKey.id;
        res.locals.apiKeySecret = apiKey.secret;
        res.locals.username = res.locals.user.username;
        apiKeyId = apiKey.id;
        apiKeySecret = apiKey.secret;
        res.render("dashboard");
        return;
      })
    }
  });
});

module.exports = router;
