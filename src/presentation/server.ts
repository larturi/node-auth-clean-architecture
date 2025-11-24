import express, { Express } from 'express'

interface Options {
  port?: number
}

export class Server {
  public readonly app: Express = express()
  private readonly port: number

  constructor(options: Options) {
    this.port = options.port ?? 3000
  }

  async start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
