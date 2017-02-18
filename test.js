var acm_hash = require('./acm_hash.js')

if (! process.argv[2]) {
  console.log('Error usage: node test.js string')
} else {
  console.log(acm_hash(process.argv[2]))
}
