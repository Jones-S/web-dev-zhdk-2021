/* Run this js with node to write all student directories to a JSON-file */

const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'cards');

fs.readdir(directoryPath, function (err, directories) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const cards = directories.filter(dir => {
      return dir != '.DS_Store' && dir != 'cards.json';
    })
    
    const data = [];
    cards.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
        data.push({
            path: `${file}/index.html`
        });
    });

    const json = JSON.stringify(data, null, null);
    const jsonSizeKB = Math.round((Buffer.byteLength(json, 'utf8') / 1024) * 100) / 100;
    const fileName = 'cards.json';
    const savePath = `${__dirname}/cards`;
    console.info(`Writing ${fileName} (Length: ${json.length}, Size: ${jsonSizeKB}kB)`);

    if (!fs.existsSync(savePath)) {
        fs.mkdirSync(savePath)
    }

    return fs.writeFile(`${savePath}/${fileName}`, json, 'utf-8', (err) => {
        if (err) {
            throw err;
        } else {
            console.log(`✅💾 Wrote cards to json successfully!`);
        }
    })
});

