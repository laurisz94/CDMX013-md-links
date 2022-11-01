const f = require('./index.js');
const p = require('./validate-link.js')
//const validateLink = require('./validate-link.js');

//1) devolver -> array de links
//entra un ruta string -> lista de links
const getLinks = (ruta) => {
    const links = f.contentFile(ruta)
    const regEx = /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_$#\/]+)([.a-z0-9]+)/gi
    const arrayLinks = links.match(regEx);
    return arrayLinks
 };

 //2 devovler -> array de links validados [{link: http..., ok: true},{link: http.., ok: false}]
 //que entra (array de links que son strings) y que debe salir (array de objetos)
const newValidatedLinks = (arrayLinks) => {
    //prometer que voy a devolver una array ....
    
        const validatedLinks = arrayLinks.map(link =>{
            return p.validateLink(link)
        })

        //console.log(validatedLinks)
        return validatedLinks
    }


const mdLinks = (ruta) => {
    //segun una ruta obtener todos los links dentro de ese archivo
    const links = getLinks(ruta)
    //enviar esos links para ser validados
   const fetchValidatedLinks= newValidatedLinks(links)
 Promise.all(fetchValidatedLinks).then(console.log)
    } 
//que se resuelve con un array con un objeto href, file, etc. 

// const stadisticLinks = arrayLinks.length
// console.log(stadisticLinks);

/* const mdLinks = (path, options) => {
    //segun una ruta obtener todos los links dentro de ese archivo
    
    const links = getLinks(ruta);
    //enviar esos links para ser validados
   const fetchValidatedLinks= newValidatedLinks(links);
 Promise.all(fetchValidatedLinks).then(console.log);
    } */

console.log(mdLinks('hola.md'))

const totalLinks = (ruta) => {
    const total = mdLinks(ruta); //promise
    total.then((allLinks) => {
      const todos = allLinks.map((linksHref) => linksHref.href.length);
      console.log("TOTAL", todos);
      const stats = `total: ${todos}`;
      console.log(stats);
    });
 }

 console.log(totalLinks('README.md'))