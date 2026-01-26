const os = require ('os')
 
// info about current user

const usr = os.userInfo()
console.log =( usr)

// methode returns the system uptime seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs= {
 name: os.type(),
 release: os.release(),
 totalMem: os.totalmem(),
 freeMem: os.freemem(),
}
console.log (currentOs)