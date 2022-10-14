let fs = require('fs'); 
let path = require('path');

const validatePath = (paths) => fs.existsSync(paths); //Valida si es un ruta  

console.log(validatePath);

fs.readFile('README.md','utf8', (err, data) => { //lee el contenido del archivo.
  if (err) {
    console.log('error: ', err);
  } else {
    console.log(data);
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

let path1 = path.join('user/developer/laboratoria/CDMX013-md-links', 'test' ); //unir rutas
console.log(path1);
