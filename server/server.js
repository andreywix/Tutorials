var app = require('./index');

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});