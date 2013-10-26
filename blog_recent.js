var http = require('http'),
    fs   = require('fs');

http.createServer(function(req, res) {

    if (req.url == '/') {
        fs.readFile('./resources/titles.json', function(err, data) {
            if (err) throw err;

            titles = JSON.parse(data.toString());

            var output = '<html><head></head><body><h1>Latest Posts</h1><ul>';

            for (var index in titles) {
                output += '<li>' + titles[index].title + '</li>';
            }

            output += '</ul></body></html>';

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(output);
        });
    }

}).listen(8000, "127.0.0.1");

console.log(' *** Listening on http://localhost:8000');