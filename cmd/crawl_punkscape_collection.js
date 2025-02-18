const appRoot = require('app-root-path');
const fs = require('fs');
const request = require('sync-request');

const outputPath = appRoot + '/config/punkscape_collection.json';

let collectionData = [];
let existItem = [];
if (fs.existsSync(outputPath)) {
    collectionData = require(outputPath);
    collectionData.forEach(element => {
        existItem.push(element.id); 
    });
}

let from = 0;
let total = 10000;

fs.appendFileSync(outputPath, "[\n");

for (i = from; i < total; i++) {
    console.log("Process: #" + i);
    if (!existItem.includes(i)) {
        let url = 'https://bafybeiclqgyaqdgbi3goa7mz5ukp5nix2u3y5pkc22sfaiv5i5aygzcp4i.ipfs.dweb.link/'+i+'/metadata.json';
        let res = request('GET', url);
        if (res.statusCode == 200) {
            let data = res.getBody('utf8');
            data = JSON.parse(data);
            data['id'] = i;
            data = JSON.stringify(data);
            console.log(data);
            if (i == total-1) {
                fs.appendFileSync(outputPath, data+"\n");
            } else {
                fs.appendFileSync(outputPath, data+",\n");
            }
        }
    }
}

fs.appendFileSync(outputPath, "]");