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

//console.log(getLinks('hola.md'))
 //2 devovler -> array de links validados [{link: http..., ok: true},{link: http.., ok: false}]
 //que entra (array de links que son strings) y que debe salir (array de objetos)
/* const newValidatedLinks = (arrayLinks) => {
    //prometer que voy a devolver una array ....
    
        const validatedLinks = arrayLinks.map(link =>{
            console.log(object + 'hola')
            return p.validateLink(link)
        })

        //console.log(validatedLinks)
        return validatedLinks
    } */

   /* const mdLinks = (path, options) => {

    //segun una ruta obtener todos los links dentro de ese archivo
    const links = getLinks(path)
    //console.log(links.length)
    //enviar esos links para ser validados
   const fetchValidatedLinks= newValidatedLinks(path, links)

   
 Promise.all(fetchValidatedLinks).then((response) => {
    console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

 
     }  */ 
       
  const mdLinks = (path,  options = {validate: true, stats: false}  ) => { 
    const route = f.pathisRelativeorAbsolute(path);
    const extensionFile = f.extFile(route);
    
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
                console.log(stats)
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
     }
    })
}
   
      
 /*  if(extensionFile === 'md') {
    if(options.validate === true){
        Promise.all(fetchValidatedLinks).then((response) => {
            console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if(options.validate === false) {
        Promise.all(fetchValidatedLinks).then((response) => {
            console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if(options.stats === true)

    if(options.validate === true && options.stats === true)
  }                                                                                    
}  
 */     

const resultado = mdLinks('hola.md', {validate: true, stats: true})

resultado.then((res) => {
     console.log(res)
 })
 .catch((error) => {
    console.log(error)
 })

module.exports = { mdLinks, getLinks}
