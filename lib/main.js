var FeedParser = require('feedparser')
  , request = require('request')
  , colors = require('colors')

var Hackaday = {

    get: function(callback) {
        var req = request('http://feeds2.feedburner.com/hackaday/LgoM')
          , fp = new FeedParser();

        req.on('error', function(err) {
            callback('There was an error processing your request. Error: ' + err);
        });

        req.on('response', function(res) {
            var stream = this;

            if (res.statusCode != 200) {
                return this.emit('error', new Error('Bad status code'));
            }

            stream.pipe(fp);
        });

        fp.on('readable', function() {
            var stream = this
              , item;

            while(item = stream.read()) {
                callback(item);
            }

        });
    }
}

module.exports = Hackaday;
