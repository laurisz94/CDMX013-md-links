 const v = require('./validate-link.js');

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
 
 
  module.exports = { getStastsValidate}  