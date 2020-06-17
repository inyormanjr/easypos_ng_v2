const url = require('url');
const uri = 'mongodb+srv://admin:admin123@cluster0-r0bun.mongodb.net/easypos?retryWrites=true&w=majority';

if (!uri) {
    throw new Error('\033[31mYou need to provide the connection string. ' + 'You can open "db/connection-config.js" and export it or use the "setUri" command.\033[0m');
}
const uriObj = url.parse(uri);
if (uriObj.protocol !== "mongodb+srv:") {
  throw new Error("Must be a mongodb URI");
}
if (!uriObj.host || !uriObj.path) {
    throw new Error('Improperly formatted URI')
}

module.exports = uri;

