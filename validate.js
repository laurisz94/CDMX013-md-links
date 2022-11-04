const f = require('./index.js');
const p = require('./validate-link.js');
const r = require('./index.js');
//const validateLink = require('./validate-link.js');

//1) devolver -> array de links
//entra un ruta string -> lista de links
const getLinks = (ruta) => {
    const links = f.contentFile(ruta)
    const regEx = /\[([^\[]+)\](\(.*\))/gm;
    const arrayLinks = links.match(regEx);
    console.log(arrayLinks)
    return arrayLinks
 };
 
 

/* const getLinks2 = (ruta) => {
    const links = f.contentFile(ruta)
    const regEx2 =  /[A-Z]\w+/gi
    const arrayLinks = links.match(regEx2);
    return arrayLinks
 };
 */
 
 //2 devovler -> array de links validados [{link: http..., ok: true},{link: http.., ok: false}]
 //que entra (array de links que son strings) y que debe salir (array de objetos)
const newValidatedLinks = (path, arrayLinks) => {
    //prometer que voy a devolver una array ....
    
        const validatedLinks = arrayLinks.map(link =>{
            return p.validateLink(path, link)
        })

        //console.log(validatedLinks)
        return validatedLinks
    }


const mdLinks = (path, options) => {

    //segun una ruta obtener todos los links dentro de ese archivo
    const links = getLinks(path)
    //enviar esos links para ser validados
    /* const path = r.pathisRelativeorAbsolute(ruta)
    console.log(path) */
   const fetchValidatedLinks= newValidatedLinks(path, links)
 Promise.all(fetchValidatedLinks).then((response) => {
    console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
     }
    
//que se resuelve con un array con un objeto href, file, etc. 

/* const mdLinks = (path, options) => {
    //segun una ruta obtener todos los links dentro de ese archivo
    
    const links = getLinks(ruta);
    //enviar esos links para ser validados
   const fetchValidatedLinks= newValidatedLinks(links);
 Promise.all(fetchValidatedLinks).then(console.log);
    } */

console.log(mdLinks('README.md'))

