const querystring = require('querystring');

const url = `https://serjtankian.com/api?username=eugene%2520khristo&alias=idon'tknow`;
const parsedQueryString = querystring.parse(decodeURI(url.split('?')[1]));

console.log(parsedQueryString);
