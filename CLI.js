#!/usr/bin/env node
const fs = require('fs');
const  f = require ('./validate.js')
const r = require ('./stats.js')

const [, , ...[path, validate, stats]] = process.argv;


if (!path) {
    console.log('Please enter path and options');
    console.log('Only these options are allowed:\n--validate\n--stats\n--validate --stats');
}

if(path && !validate){
    console.log(f.getLinks(path));
}

if(path && validate === '--validate'){
    f.mdLinks(path, { validate: true })
    .then(arr => ((stats === '--stats') ? r.getStastsValidate(arr) : arr))
    .then(data => console.log(data));
}

if (path && (validate === '--stats' && !stats)) {
    f.mdLinks(path, { validate: false })
    .then(arr => r.getStastsValidate(arr))
    .then(data => console.log(data));
}
if(path && (validate === '--stats' && stats === '--validate')){
    console.log('Only these options are allowed:\n--validate\n--stats\n--validate --stats');
     }  