const queryString = require('querystring');

const hostApi = 'https://serjtankian.com/api?';
const rawQueryString = {
  username: 'eugene khristo',
  alias: `idon'tknow`
};

const urlApi = `${hostApi}${encodeURI(queryString.stringify(rawQueryString))}`;
process.stdout.write(urlApi);
