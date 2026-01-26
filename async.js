const {readFile, writeFile}= require ('fs')

readFile('./content/frist.txt','utf8',(err,result)=> {
    if(err){
        console.log( err)
        return
    }
    const frist = result
    readFile('./content/second.txt','utf8',(err,result)=>{
      if(err){    
        console.log( err)
        return
    }
    const second = result
    writeFile(
        './content/resultsync.txt',
        `here is the result : ${frist},${second}`,
        (err,result )=> {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }
      )
     }
    )
 }
)