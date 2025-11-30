import { envs } from '@/config/envs.js'
import { AppRoutes } from '@/presentation/routes.js'
import { Server } from '@/presentation/server.js'

async function main() {
  const options = {
    port: envs.port,
    routes: AppRoutes.routes(),
  }

  await new Server(options).start()
}

main().catch((err) => {
  console.error('Fatal error starting server:', err)
  process.exit(1)
})
