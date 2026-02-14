const { readFile,writeFile } = require ('fs')
const util = require ('util');
const readFilePromise= util.promisify(readFile)
const writeFilePromise= util.promisify(writeFile)

const start = async ()=> {
    try {
    const frist = await readFilePromise( './content/frist.txt', 'utf8')   
     const second = await readFilePromise( './content/second.txt', 'utf8')   
     await writeFilePromise('./content/result-minid-grenade.txt',
        `this is awesome : ${frist}${second}`)
     console.log (frist , second)  
    } catch (error) {
        console.log(error)
    }
   
   
}
start()

//gettext( './content/frist.txt')
//.then((result  ) => console.log (result))
//.catch((err)=> console.log(err))
// 
// /const gettext = (path) => {
   // return new Promise((resolve, reject) => {
       // readFile(path,'utf8',(err,data)=> {
    //if (err) {
        //reject (err)
   // }else{
      //  resolve (data)
    //}
//})
   // })
//}
