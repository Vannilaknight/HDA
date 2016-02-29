var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://admin:password@ds015508.mongolab.com:15508/hda',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://admin:password@ds015508.mongolab.com:15508/hda',
    port: process.env.PORT || 80
  }
}