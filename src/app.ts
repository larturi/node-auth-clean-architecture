import { envs } from './config/envs.js'
import { Server } from './presentation/server.js'

(() => {
  main()
})()

async function main() {
  const options = {
    port: envs.port,
  }

  await new Server(options).start()
}
