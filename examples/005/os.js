const os = require('os');

console.log(os.homedir());
console.log(os.platform());
console.log(`You have ${os.cpus().length} of ${os.cpus()[0].model}`);
