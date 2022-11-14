const f = require('./index.js');
const p = require('./validate-link.js');
const r = require('./stats.js');

//1) devolver -> array de links
//entra un ruta string -> lista de links
const getLinks = (ruta) => {
    const content = f.contentFile(ruta);
    //console.log(content)
    const regEx = /(\[.*\])(\(https{0,1}:\/\/.+?)[\s|"|)]{1}/gm;
    let match;
    const arrayLinks = [];

    while ((match = regEx.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (match.index === regEx.lastIndex) {
            regEx.lastIndex++;
        }

        const object = {
            href: match[2].slice(1),
            text: match[1].slice(1, match[1].length-1),
            file: ruta
        };
        arrayLinks.push(object);
 }
 //console.log(arrayLinks)
 return arrayLinks
}


       
  const mdLinks = (path,  options = {validate: true, stats: false}  ) => { 
    const route = f.pathisRelativeorAbsolute(path);
    const extensionFile = f.extFile(route);
    
    console.log('Esta es la ruta en el que estas ' + route)
    const links = getLinks(path)
    //console.log(links)
    const fetchValidatedLinks= p.validateLink(links)
    //console.log(fetchValidatedLinks + 'hola')
    
    return new Promise((resolve, reject) => {
        if(extensionFile === true) {
            if(options.validate === false ){
                 resolve(links)

            } else if (options.validate === true) {

                resolve(Promise.all(fetchValidatedLinks))

            } else if(options.stats === true) {

                const stats = r.getStastsValidate(links) 
                //console.log(stats)
                resolve(stats)

            } else if(options.stats === false) {
                resolve(links)
                 
            }  else if (options.validate === true && options.stats === true) {
                const stats2 = r.getStastsValidate(links) 
                //console.log(stats)
                resolve(stats2)
            } 
             else {
            reject('error')
        }
     }else { 
        console.log("el archivo no es .md");
     }
    })
}
   

//const resultado = mdLinks('hola.md', {validate:true})
//const resultado = mdLinks('hola.md', {validate:false})
//const resultado = mdLinks('hola.md', {stats:false})
const resultado = mdLinks('hola.md', {stats:true})
//const resultado = mdLinks('hola.md', {validate: true, stats: true })


resultado.then((res) => {
     console.log(res)
 })
 .catch((error) => {
    console.log(error)
 })

module.exports = { mdLinks, getLinks}
