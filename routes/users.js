var express = require('express');
var router = express.Router();
var viewEngine = require('view-engine');
viewEngine.register('handlebars', require('view-engine-handlebars'));

viewEngine.configure({
  engines: {
    'view-engine-handlebars': {
      extensions: ['hbs']
    }
  }
});
var _userTemplate = require('view-engine').load(require.resolve('../pages/users/users_home.hbs'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  var callback = function (err, data) {
    if (err) {
      console.log('Failed to render: ' + err);
      return;
    }
    res.send(data);
    console.log('Output: ' + data);

  };

  var viewModel = {
    title: 'Users'
  };


  _userTemplate.render(viewModel, callback);

});

module.exports = router;
