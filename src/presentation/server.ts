import express, { Express } from 'express'

export class Server {
  public readonly app: Express = express()

  constructor() {}

  async start() {
    this.app.listen(3000, () => {
      console.log('Server running on port 3000')
    })
  }
}
