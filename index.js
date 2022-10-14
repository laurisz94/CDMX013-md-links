let fs = require('fs'); 
let path = require('path');
  
if(fs.existsSync('.eslintrc')){
  console.log('el arhivo EXISTE!');
} else {
  console.log('El archivo NO EXISTE!');
}

const validatePath = (path) => fs.existsSync(path); //Valida si es un ruta  o si existe el archivo RETUNR IMPLICITO
console.log('Validando Path:' + validatePath('README.md'));


const pathAbsolute = path.resolve(__dirname, 'CDMX013-md-links', 'index.js'); //saber si es un ruta relativa
console.log('Validando si es una ruta abdosula' + pathAbsolute);

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
