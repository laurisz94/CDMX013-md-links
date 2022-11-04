const r = require('./index.js')
/* const path = r.pathisRelativeorAbsolute(link)
console.log(path) */
const validateLink = (link) => {
    const path = r.pathisRelativeorAbsolute(link)
   
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
             const object = {
                status: error.message,
                text: response.statusText,
            }
            return object 
        });
}

module.exports = { validateLink}
    
