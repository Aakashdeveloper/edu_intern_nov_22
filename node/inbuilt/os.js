let os = require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os.cpus().length+" core")
console.log(os.version())
console.log(os.uptime())