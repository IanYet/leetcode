const fs = require('fs')

fs.readdir(__dirname, (err, files) => {
    files.forEach(filename => {
        if (filename.startsWith('0') && filename.endsWith('.js')) {
            const name = filename.replace(/([0-9]+-)(.+)/g, (match, pre, suf)=>{

                const num = pre.slice(0, 4)
                return Number(num)+ '.' + suf
            })
            fs.renameSync(__dirname + '/' + filename, __dirname + '/' +name)
        }
    })
})

// (function(){
//     let s = '0020-xxxxx-xxx-xxx.js'
//     const reg = /([0-9]+-)(.+)/g

//     s = s.replace(reg, (match, pre, suf)=>{
//         console.log(match, pre, suf);

//         const num = pre.slice(0, 4)
//         return Number(num)+ '.' + suf
//     })

//     console.log(s);
// })()
