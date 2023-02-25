const os = require('os')
const { writeFile } = require('fs')

const theSentence = require('./practice2')
const user = os.userInfo().username

writeFile(
    './content/practice.txt', 
    `${theSentence} ${user}`,
    (err, result) => {
        if (err){
            console.log(err)
            return
        }
    }
)

