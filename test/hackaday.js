var hackaday = require('../lib/main.js');

hackaday.get(function(posts) {
    console.log(posts.title.green);
});
