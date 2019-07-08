const url = require('url');
const queryString = require('querystring');
// 'https://serjtankian.com/api?username=eugene%2520khristo&alias=idontknow'
const [URL] = process.argv.slice(2);
const parsedUrl = url.parse(URL);
const parsedQuery = queryString.parse(decodeURI(parsedUrl.query));

console.log(parsedUrl);
console.log(parsedQuery);
