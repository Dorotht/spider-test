const fs = require('fs');

function saveContent(file, content) {

    fs.writeFile(file, content.toString());

}

module.exports = saveContent;