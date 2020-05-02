const cp = require('child_process')

cp.exec("ls -l", (error, data, stdErr) => {
    if (error) {
        process.stderr.write(stdErr)
    }
    else {
        process.stdout.write(data)
    }
})