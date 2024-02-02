import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'

const app: Application = express()

//parsers

app.use(express.json())
app.use(express.text())
app.use(cors()) // Use the 'cors' middleware

//application routes
app.use('/api/v1', router)

export default app
