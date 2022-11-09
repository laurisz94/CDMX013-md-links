/*  const getStats = (arr) =>{
    const arrLinksHref = arr.map(link => {
        return link.length
  })
  return arrLinksHref
 } */
 const v = require('./validate-link.js');

 const getStastsValidate = (links) =>{
  //let statsLinks = v.validateLink(links);
  let brokenLinks =  links.filter(e => e.status != 200);
 // console.log(statsLinks, 'funciona')
  let result = {total: links.length, unique: links.length}
  console.log(result)
  return result
 }
  const getStast = (links) =>{
    return {total: links.length}
/* const result = getlinks.then((res) => {
  return {total: getlinks.length, unique:res.unique} */
}

 /* const getStasts = (path) =>{
  const getlinks = n.getLinks(path)
  //console.log(getlinks.length)

  const promesa = new Promise ((resolve, reject) => {
    resolve('se resolvio')
    reject('error')
     });

     promesa.then(console.log)
     

  } */

 

//console.log(getStasts('hola.md'))
  module.exports = { getStastsValidate, getStast }  