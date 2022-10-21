const f = require('./index.js');

const getLinks = (link) => {
    const links = f.contentFile(link)
    const regEx = /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_$#\/]+)([.a-z0-9]+)/gi
    const arrayLinks = links.match(regEx);
    return arrayLinks
 };

const url = 'https://github.com/workshopper/learnyounode'
 fetch(url)
.then(function(resp) {
    //console.log(resp);
    console.log(resp.statusText);
    if(resp.statusText == 'OK'){
        console.log('link valido!');
    }else{
        console.log('link invalido!');
    }
})
.catch(function(err) {
    console.log(err.message);
})
