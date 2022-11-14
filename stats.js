 const v = require('./validate-link.js');
/* 
  const getStastsValidate = (links) =>{
  //let statsLinks = v.validateLink(links);
  let brokenLinks =  links.filter(e => e.status != 200);
  //console.log(brokenLinks, 'funciona')
  let result = {total: links.length, unique: links.length}
  //console.log(result)
  return result
 }  */
  /* const getStast = (links) =>{

    return {total: links.length}

}
 */
const getStastsValidate = (links) => {

  const totalLinks = links.map((link) => link);
  const brokenLinks =  links.filter((link) => link.status  !== 200); 
  
  const uniqueLinks = [...new Set(links.map((link) => link.href))]
  
  const stats = {
      total: totalLinks.length,
      unique: uniqueLinks.length,
  }
      return stats
  }
 /*  
 // const broken = (links) => {
    const statsLinks = obtainStats(links);
    const filterBrokenLink = links.filter(link => link.status !== 200);
    console.log(links.filter(link => link.status !== 200))
    let result = {
        total:links.length,
        unique: statsLinks.unique,
        broken: filterBrokenLink.length
    }
    console.log(result)
    return result
} */
 
  module.exports = { getStastsValidate}  