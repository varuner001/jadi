

var viewEngine = require('view-engine');
viewEngine.register('handlebars', require('view-engine-handlebars'));

viewEngine.configure({
    engines: {
        'view-engine-handlebars': {
            extensions: ['hbs']
        }
    }
});
var _userTemplate = require('view-engine').load(require.resolve('./users_home.hbs'));

var callback = function (err, data) {
    if (err) {
        console.log('Failed to render: ' + err);
        return;
    }
    return(data);
};

/* GET users listing. */
function GETUser(req, res, next) {

    var viewModel = {
        title: 'Users'
    };

    _userTemplate.render(viewModel, function (err, data) {
        if (err) {
            console.log('Failed to render: ' + err);
            return;
        }
        res.send(data);
    });

}


module.exports.GET = GETUser;
