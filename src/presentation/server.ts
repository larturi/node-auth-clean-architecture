import express, { Express, Router } from 'express'

interface Options {
  port?: number
  routes: Router
}

export class Server {
  public readonly app: Express = express()
  private readonly port: number
  private readonly routes: Router

  constructor(options: Options) {
    this.port = options.port ?? 3000
    this.routes = options.routes
  }

  async start() {
    // Middlewares
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    // Routes
    this.app.use('/api', this.routes)

    // Start server
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
