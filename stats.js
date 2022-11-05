const n = require('./validate.js');


/*  const getStats = (arr) =>{
    const arrLinksHref = arr.map(link => {
        return link.length
  })
  return arrLinksHref
 } */

 const getStasts2 = (arr) =>{
  const arrLinks = arr.map(link => link.href);
      return ({
        Total: arrLinks.length,
        Unique: new Set(arrLinks).size
      })
} 
  //console.log(getStats('hola.md'))
  module.exports = { getStasts2 }