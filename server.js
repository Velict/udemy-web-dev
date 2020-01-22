var connect = require('connect');

var serveStatic = require('serve-static');
connect().use(serveStatic("C:/Users/P/source/udemy-web-dev")).listen(8080, function(){
    console.log('Server running on 8080...');
});