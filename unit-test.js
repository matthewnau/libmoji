// require the libmoji library
const libmoji = require('../../Github/libmoji/libmoji.js');

//console.log(libmoji.getComicId(libmoji.randTemplate(libmoji.templates)));

let url = `https://render.bitstrips.com/v2/cpanel/8968038-316830037_35-s5-v1.png?transparent=1&palette=1`
let id = libmoji.getAvatarId(url);
let comic = libmoji.getComicId(libmoji.randTemplate(libmoji.templates));
console.log(libmoji.buildComicUrl(comic, id, 0, 2));