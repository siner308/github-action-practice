var app = require('./app').default;

var server = app.listen(3000, function(){
    console.log('express server has started on port 3000')
});
