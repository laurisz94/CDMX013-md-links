const f = require('./index.js');

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
const validarLinks = (arrayLinks) => {
    //prometer que voy a devolver una array ....

    const promesa = new Promise((resolve,reject)=>{

        const validatedLinks = []

        for(let i=0; i < arrayLinks.length; i++) {
    
            const link = arrayLinks[i]
            
            const promiseDeLink = fetch(link)
            .then(function(resp) {
                //console.log(resp);
                //console.log(resp.statusText);
               if(resp.statusText == 'OK'){
                console.log('link Valido')
                    const newArray = {
                        href: link,
                        status: resp.status,
                        text: resp.statusText,
                    }
                    console.log(newArray);
                    validatedLinks.push(newArray)
                    return newArray;
                }else{
                    console.log('link invalido!');
                    const newBadArray = {
                        href: link,
                        status: resp.status,
                        text: resp.statusText
                    }
                    console.log(newBadArray)
                    validatedLinks.push(newBadArray)
                    return newBadArray
                }
            })
            .catch(function(err) {
                console.log(err.message);
            })
        }
        //promise all
        // [promise,promise,promise]
        //[{status,...},promise,{status...}]

        console.log('termino_')
        // resolve()
    })    
    

}

const mdLinks = (ruta) => {
    //segun una ruta obtener todos los links dentro de ese archivo
    const links = getLinks(ruta)
    console.log('links obtenidos', links)
    //enviar esos links para ser validados
    validarLinks(links)
}


// const stadisticLinks = arrayLinks.length
// console.log(stadisticLinks);


console.log(mdLinks('hola.md'))


// function prueba() {
//     const lista = []

//     lista.push(99)
//     lista.push(99)
//     lista.push(1)
//     return lista
// }

// console.log(prueba())