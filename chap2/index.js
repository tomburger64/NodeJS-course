console.log("first console log test")

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        // ↑ reading data from a file

        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        // ↑ deletes the mentionned file

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWright.txt'), data);
        // ↑ write data to a new file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWright.txt'), '\n\nAlso heres the appended text here !');
        // ↑ append it to that file
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWright.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
        // ↑ reading the new file's data
    }
    catch (err) {
        console.error(err);
    }
}
fileOps()

// // fs.readFile('chap2/files/starter.txt', 'utf8', (err, data) => { // ← static way of calling files
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
// // dynamic way of calling files, using path
//     if (err) throw err;
//     // console.log(data.toString()); ← can uncomment this if remove " 'utf8', ""
//     console.log(data);
// })

// console.log("What order does this appear in")

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'This is the written text', (err) => {
// // write instead of read, new file name to create a new file
// // no need to specify utf8, it's by default
// // no need to use data as we're writing smnthng
//         if (err) throw err;
//         console.log('Write complete');



//         fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nThis is modified using append()', (err) => {
//             // appendFile instead of writeFile, both acting on reply.txt
//             // should create a file if it doesn't exist just like write does
//             // here, using both methods at once to make sure it's created / modified
//                     if (err) throw err;
//                     console.log('Append complete');

//                     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//                         // rename, changes the name of the file
//                                 if (err) throw err;
//                                 console.log('Rename complete');
//                             })
//                 })
//     })
    // all happens in the expected order (write → append → rename)

fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'This file was created using appendFile()', (err) => {
// appendFile instead of writeFile, should create a file if it doesn't exist just like write does
    if (err) throw err;
        console.log('Append complete');
})





// intentionnal error  ↓
// fs.readFile('chap2/files/starter.huh', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })
// so this can trigger ↓
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})