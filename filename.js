const fs = require('fs')

fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
        if (file.includes('_') && file.endsWith('.js')) {
            const name = file.replace(/_/g, '-')
            fs.renameSync(__dirname + '/' + file, __dirname + '/' +name)
        }
    })
})
