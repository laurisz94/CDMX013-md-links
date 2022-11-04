let fs = require('fs'); 
let path = require('path');  

//let marked = require('marked');


const validatePath = (paths) => fs.existsSync(paths); //Valida si es un path válido/invalido u existe el archivo RETUNR IMPLICITO
//console.log('Validando Path: ' + validatePath('README.md'));

const pathisRelativeorAbsolute = (ruta) => (path.isAbsolute(ruta) ? ruta : path.resolve(ruta));
//console.log('Muestra ahora la ruta absoluta = ' + pathisRelativeorAbsolute('README.md'));

const validateDirectory = (paths) => fs.lstatSync(paths).isDirectory(); 
//console.log('Es directorio? = ' + validateDirectory('index.js'));

const validateFile = (file) => fs.lstatSync(file).isFile();
//console.log('Es archivo? = ' + validateFile('index.js'));

const contentDirectory = (paths) => fs.readdirSync(paths); //leer los archivos y guardarlos en un array
//console.log(contentDirectory(__dirname));

const extFile = (file) => path.extname(file) === ".md";
//console.log('Valida si es un archivo MarkDown = ' + extFile('README.md'));

const contentFile = (directory) => fs.readFileSync(directory, 'utf8');
//console.log(contentFile('README.md'));

//const extractLinks = (content) => {
    /*links = [];
    const renderer = new marked.Renderer();
    renderer.links= (href, text, title) => {
        links.push({
            href: href,
        });
        return links
//};*/

//console.log(extractLinks('README.md'))

/*const getLinks = (link) => {
    const links = contentFile(link)
    const regEx = /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_$#\/]+)([.a-z0-9]+)/gi
    const arrayLinks = links.match(regEx);
    return arrayLinks  
}*/
  //console.log(getLinks('README.md'));

/*const newArrayLinks = (links) => {
    const newArray = links.map(({ href, }) => ({ [href]: href }))
    console.log (newArray('README.md'))
    }

console.log(newArrayLinks('README.md'));*/

module.exports = { validatePath, validateDirectory, validateFile, contentDirectory, extFile, contentFile, pathisRelativeorAbsolute };