const r = require('./index.js');
 
const validateLink = (link) => {
   const validatedLinks = link.map(link => {
    return fetch(link.href)
    .then((response) => {
        if(response.status === 200) { 
        const object = {
            href: link.href,
            status: response.status,
            text: link.text,
            file: link.file,
            OK: 'OK'
        }
        return object 
    }else {
        const object = {
            href: link.href,
            status: response.status,
            text: link.text,
            file: link.file,
            OK: 'Fail'
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
   })
   //console.log(validatedLinks)
   return validatedLinks
}

module.exports = { validateLink}
    
