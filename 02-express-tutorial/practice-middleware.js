const consoleLog = (req, res, next) => {
    console.log('hello world!')
    next()
}

exports.consoleLog = consoleLog