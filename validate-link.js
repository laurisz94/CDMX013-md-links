const r = require('./index.js');
 
const validateLink = (path, link) => {
   
    return fetch(link)
        .then((response) => {
            if(response.status === 200) { 
            const object = {
                href: link,
                status: response.status,
                file: path,
                message: 'OK'
            }
            return object 
        }else {
            const object = {
                href: link,
                status: response.status,
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
    
