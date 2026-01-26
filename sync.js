const {readFileSync , writeFileSync } = require('fs')

const first = readFileSync ('./content/frist.txt' , 'utf8')
const second = readFileSync ('./content/second.txt' , 'utf8')

writeFileSync(
    './content/resultsync.txt',
    `here is the result: ${first},${second}`,
    {flag: 'a'}
)