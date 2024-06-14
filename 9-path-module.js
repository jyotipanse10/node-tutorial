const path = require('path')

console.log(path.sep);

const filePath = path.join('/test','subfolder','text')

console.log(filePath);

const absolute = path.resolve('test','subfolder','text')

console.log(absolute);