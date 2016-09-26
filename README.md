# daily-proxy

## Install
```bash
$ npm i daily-proxy
```

## Usage
#### Run Server
```bash
$ node server.js
```

#### Send request
```js
fetch('http://127.0.0.1:8000?https://www.artstation.com/search/users.json?q=m4').then(res => res.json()).then(data => console.log(data)
```

## license

MIT. Copyright (c) [viii](https://github.com/ncysatnaf).
