const f = require('./index.js');

f.extFile((file) => {
    if(file === ".md"){
    console.log('README.md')
    } 
});

console.log(f.extFile('README.md'))