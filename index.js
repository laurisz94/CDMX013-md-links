let fs = require('fs'); 
let path = require('path');  

const validatePath = (paths) => fs.existsSync(paths); //Valida si es un path válido/invalido u existe el archivo RETUNR IMPLICITO
console.log('Validando Path:' + validatePath('README.md'));

const validatePathisAbsolute = (paths) => path.isAbsolute(paths);
console.log('Validando si es ruta absoluta:' + validatePathisAbsolute('/User/developer/laboratoria/CDMX013-md-links/README.md') );

const pathIsRelative = (paths) => path.resolve(paths) 
console.log('muestra la ruta absoluta' + pathIsRelative('README.md'));

const validateDirectory = (paths) => fs.lstatSync(paths).isDirectory(); 
console.log('Es directorio?' + validateDirectory('index.js'));

const validateFile = (file) => fs.lstatSync(file).isFile();
console.log('Es archivo?' + validateFile('index.js'));

const contentDirectory = (paths) => fs.readdirSync(paths); //leer los archivos y guardarlos en un array
console.log(contentDirectory(__dirname));

const extFile = (file) => path.extname(file) === ".md";
console.log(extFile('README.md'));

const contentFile = (directory) => fs.readFileSync(directory, 'utf8');
console.log(contentFile('README.md'));

module.exports = {extFile};
  
//let ext = path.extname('/User/developer/laboratoria/CDMX013-md-links/README.md'); //Conocer la extensión
//console.log(ext);

//let path1 = path.join('user/developer/laboratoria/CDMX013-md-links', './test.js' ); //unir rutas
//console.log(path1);
