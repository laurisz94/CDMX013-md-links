let fs = require('fs'); 
let path = require('path');  

const validatePath = (paths) => fs.existsSync(paths); //Valida si es un path válido/invalido u existe el archivo RETUNR IMPLICITO
console.log('Validando Path:' + validatePath('README.md'));

const validatePathisAbsolute = (paths) => path.isAbsolute(paths);
console.log('Validando si es ruta absoluta:' + validatePathisAbsolute('/User/developer/laboratoria/CDMX013-md-links/README.md') );

//const pathAbsolute = path.resolve(__dirname, 'CDMX013-md-links', 'index.js'); //saber si es un ruta relativa
//console.log('Validando si es una ruta abdosula' + pathAbsolute);

const validateDirectory = (route) => fs.lstatSync(route).isDirectory(); 
console.log('Es directorio?' + validateDirectory('index.js'));

const validateFile = (file) => fs.lstatSync(file).isFile();
console.log('Es archivo?' + validateFile('index.js'));

fs.readFile('README.md','utf8', (err, data) => { //lee el contenido del archivo.
  if (err) {
    console.log('error: ', err);
  } else {
    //console.log(data);
  }
});

fs.readdir(__dirname, (err,files) => { //Lee de forma asincrona el contenido de un directorio
  if (err) {
    console.log(err);
  } else {
    console.log('\nCurrent directory filenames:');
    files.forEach(file => {
      console.log(file);
    })
  }
});
  
let ext = path.extname('/User/developer/laboratoria/CDMX013-md-links/README.md'); //Conocer la extensión
console.log(ext);

let path1 = path.join('user/developer/laboratoria/CDMX013-md-links', './test.js' ); //unir rutas
console.log(path1);
