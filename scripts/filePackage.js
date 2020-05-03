const fs = require('fs');

let getFiles = new Promise(function(res, rej) {
    let collectedFiles = [];
    fs.readdir('../articles_unpacked', (err, files) => {
        for(let i=0; i<files.length; i++) {
            let filePath = '../articles_unpacked/'+files[i];
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.log('Broken: ' + err);
                }

                let unpacked = data.split('\r\n');
                let articleObj = {
                    'title': unpacked[0],
                    'author': unpacked[1],
                    'content': unpacked[2]
                };
                collectedFiles.push(articleObj);
                if (collectedFiles.length === files.length) {
                    res(collectedFiles)
                };
            });
        }
    });
});

let buildCollection = function() {
    getFiles.then(function(collectedFiles) {
        console.log(JSON.stringify(collectedFiles));
        fs.writeFile('../src/articles/articles.json', JSON.stringify(collectedFiles), function(err) {
            if (err) console.log('Broken: ' + err);
            console.log("Finished!");
        })
    })
};

buildCollection();
