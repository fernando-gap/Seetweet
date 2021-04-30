const url = require('urls') 

async function create(data) {
  
  for (const each of data) {
    if (data[each] === '')
      delete data[each]
  }
  
  switch (data.type) {
    case 'search': 
      return await url.search(data)
  }
}


module.exports = create;
