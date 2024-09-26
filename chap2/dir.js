const fs = require('fs');

// if the specified file/ dir doesn't exist,
if (!fs.existsSync('./chap2/new')){
    // mkdir = make directory
    // not specifying file ext makes a folder
    fs.mkdir('./chap2/new', (err) => {
        if (err) throw err;
        console.log('Directory created')
})  
}

// if the specified file/ dir DOES exist,
if (fs.existsSync('./chap2/new')){
    // Rmdir = make directory
    // not specifying file ext makes a folder
    fs.rmdir('./chap2/new', (err) => {
        if (err) throw err;
        console.log('Directory REMOVED')
})  
}