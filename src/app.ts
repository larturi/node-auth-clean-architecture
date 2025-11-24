import { Server } from './presentation/server.js'

(() => {
  main()
})()

async function main() {
  new Server().start()
}
