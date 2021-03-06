Hackaday
=============

[![NPM](https://nodei.co/npm/hackaday.png?compact=true)](https://nodei.co/npm/hackaday/)

Interface to http://hackaday.com blog. Read latest posts into your terminal using Node.js.

Because it's annoying to open the browser to see what's new on hackaday.

### Instalation
Make sure you have node/npm installed:

```sh
sudo npm install -g hackaday
```

### Usage

#### Terminal

After installation just type ```hackaday``` and you'll see latest posts into your terminal.
To open it in Browser, press the link beneath each article.

![Preview](http://i.imgur.com/SpcTx2s.png)

#### Javascript

Use from javascript

```js
var hackaday = require('hackaday');

hackaday.get(function(posts) {
    console.log(posts.title.green);
});

```

### Changelog

  - `0.1.1`
    - Return readable stream data
    - Send callback and read it
  - `0.0.3`: Republish
  - `0.0.2`: Create bin/lib dir structure, refactor code
  - `0.0.1`: Release on npmjs
  - `0.0.0`: First working program.

### License
See the [LICENSE](https://raw.githubusercontent.com/radubogdan/node-offliberty/master/LICENSE) file.
