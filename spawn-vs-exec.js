const cp = require('child_process')


const pingExec = cp.exec("ping -c 5 127.0.0.1", (error, stdout, stdErr) => {
  console.log(`---------------------------pid: ${pingExec.pid}---------------------------`)
  process.stdout.write(stdout)
})

const ping1Spawn = cp.spawn("ping", ["-c 10", "127.0.0.1"])

ping1Spawn.stdout.on('data', (chunk) => {
  console.log(`---------------------------pid: ${ping1Spawn.pid}---------------------------`)
  process.stdout.write(chunk)
})
