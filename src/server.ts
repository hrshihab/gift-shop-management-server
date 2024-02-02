/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from './app/config'
import { Server } from 'http'
import app from './app'

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
