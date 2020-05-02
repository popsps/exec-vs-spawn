const cp = require("child_process")
const lsCommand = cp.spawn("ls", ["-l", "-a"])
lsCommand.stdout.on("data", chunk => {
    console.log(chunk.toString().trim())
})

lsCommand.on("close", () => {
    console.log("ls process exited")
})