const r = require('./index.js');

  /* const path2 = r.pathisRelativeorAbsolute('hola.md')
console.log(path2)  */
 
const validateLink = (path, link) => {
   
    return fetch(link)
        .then((response) => {
            if(response.status === 200) { 
            const object = {
                href: link,
                status: response.status,
                text: response.statusText,
                file: path,
                message: 'OK'
            }
            return object 
        }else {
            const object = {
                href: link,
                status: response.status,
                text: response.statusText,
                file: path,
                message: 'Fail'
            }
            return object 
        }


        }).catch((error) => {
            console.log(error)
             const object = {
                status: error.message,
                text: error.statusText,
            }
            return object 
        });
}

module.exports = { validateLink}
    
