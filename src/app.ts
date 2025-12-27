import { envs } from '@/config/envs.js'
import { AppRoutes } from '@/presentation/routes.js'
import { Server } from '@/presentation/server.js'
import { MongoDatabase } from '@/data/mongodb/mongo-database.js'

async function main() {
  const options = {
    port: envs.PORT,
    routes: AppRoutes.routes(),
  }

  await MongoDatabase.connect({
    uri: envs.MONGO_URI,
    dbName: envs.MONGO_DB_NAME,
  })

  await new Server(options).start()
}

main().catch((err) => {
  console.error('Fatal error starting server:', err)
  process.exit(1)
})
