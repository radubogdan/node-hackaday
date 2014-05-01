#!/usr/bin/env node

var FeedParser = require('feedparser')
  , request = require('request')
  , colors = require('colors')
  , i = 1;

var req = request('http://feeds2.feedburner.com/hackaday/LgoM')
  , fp = new FeedParser();

// Handle Requests
req.on('error', function(err) {
    console.log('There was an error processing your request. Error: ' + err);
});

req.on('response', function(res) {
    var stream = this;

    if (res.statusCode != 200) {
        return this.emit('error', new Error('Bad status code'));
    }

    stream.pipe(fp);
});

fp.on('error', function(err) {
    // Handle what happens if error
});

fp.on('readable', function() {

    var stream = this
      , item;

    if (i < 8) {
        while(item = stream.read()) {
            console.log(i + '. ' + item.title.green + ' - ' + item.author + ' on ' + item.pubDate);
            console.log('   ' + item.link);
            console.log('\n');
        }
        i++;
    }
});
