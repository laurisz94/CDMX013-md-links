const validateLink = (link) => {
   
    
    return fetch(link)
        .then((response) => {
            const object = {
                href: link,
                status: response.status,
                text: response.statusText,
            }
            return object 

        }).catch((error) => {
             const object = {
                status: error.message,
                text: response.statusText,
            }
            return object 
        });
}

module.exports = { validateLink}
    
