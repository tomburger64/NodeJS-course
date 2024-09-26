// if some files have too much data, can do the following

const fs = require('fs');

// readabe stream
const rs = fs.createReadStream('./chap2/files/lorem.txt', {encoding: 'utf8'});
// writable stream
const ws = fs.createWriteStream('./chap2/files/new-lorem.txt')

// "worse" way of doing it, using a listener
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

// "better" way of doing it
rs.pipe(ws);